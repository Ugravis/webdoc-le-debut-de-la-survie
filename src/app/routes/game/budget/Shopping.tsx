import { useCallback, useEffect, useState } from "react"
import { type Articles } from "../../../../data/shopping/articles.types"
import useEmblaCarousel from "embla-carousel-react"
import articlesData from "../../../../data/shopping/articles"
import NutriScore from "../../../components/icons/Nutriscore"
import { useStore } from '../../../../lib/store/useStore'
import { useNavigate } from "react-router-dom"

type CategoriesMap = Record<string, Articles>

export default function Shopping() {
  const budget = useStore((state) => state.player.stats.budget.current)
  const setBudget = useStore((state) => state.setBudget)
  const player = useStore((state) => state.player)

  const multiplier = player.city ? player.city.price : 1;

  const navigate = useNavigate()

  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([])
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupStartVisible, setPopupStartVisible] = useState(true)
  const [popupStartStep, setPopupStartStep] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "trimSnaps"
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const categoriesMap = articlesData.reduce((acc, article) => {
    (acc[article.category] ??= []).push(article)
    return acc
  }, {} as CategoriesMap)

  const categories = Object.entries(categoriesMap)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const toggleProduct = (productId: number, price: number) => {
    const isSelected = selectedProductIds.includes(productId);
    const modifier = isSelected ? price : -price;
    const nextBudget = Math.round((budget + modifier) * 100) / 100;

    if (isSelected) {
      setSelectedProductIds(prev => prev.filter(id => id !== productId));
      setBudget(nextBudget);

    } else {
      if (nextBudget >= 0) {
          setSelectedProductIds(prev => [...prev, productId]);
          setBudget(nextBudget);
      } else {
          alert("Not enought money !");
      }
    }
  }

  const selectedProducts = articlesData.filter(product => 
    selectedProductIds.includes(product.id)
  )

  const totalHTML = selectedProducts.reduce((sum, item) => sum + (item.price * multiplier), 0)
  const total = Math.round(totalHTML * 100) / 100
  const tva = Math.round((total * 0.2) * 100) / 100

  return (
    <>
      <section className="cont-boxed flex-grow flex-col-center gap-4 page-section">
        <h1>Shopping game</h1>

        <p className="budget"><span className="b">{budget} €</span> left</p>
        
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">

              {categories.map(([category, products]) => (
                <div className="embla__slide" key={category}>
                  <div className="embla__slide__inner flex-col gap-3">
                    <div className="flex-center">
                      <h3>{category} section</h3>
                    </div>

                    <div className="flex flex-center flex-wrap gap-2">
                      {products.map(product => {
                        const isSelected = selectedProductIds.includes(product.id)

                        return(
                          <button 
                            key={product.id}
                            className={`product-card flex gap-2 ${isSelected ? "is-selected" : ""}`}
                            onClick={() => toggleProduct(product.id, (product.price * multiplier))}
                          >
                            <div className="flex-col flex-center">
                              <img src={`${import.meta.env.BASE_URL}images/articles/${product.image}.png`} alt="article" />
                            </div>
                            
                            <div className="flex-col gap-1">
                              <p className="brand p2">{product.brand}</p>
                              <p>{product.name}</p>
                              <NutriScore score={product.nutriscore} />
                              <p><b>{(product.price * multiplier).toFixed(2)} €</b></p>
                            </div>
                          </button>
                        )
                      })}
                    </div>

                  </div>
                </div>
              ))}
              
            </div>
          </div>
          
          <div className="embla__dots_and_buttons">
            <button className="embla__prev" onClick={scrollPrev}>‹</button>
            
            <div className="embla__dots">
              {categories.map((_, index) => (
                <button
                  key={index}
                  className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>

            <button className="embla__next" onClick={scrollNext}>›</button>
          </div>
        </div>

        <button 
          className="btn-large"
          onClick={() => {
            if (selectedProducts.length !== 0) {
              setPopupVisible(true);
            }
          }}
        >
          Confirm and pay
        </button>
      </section>

      {popupVisible && (
        <div className="popup-overlay" onClick={() => setPopupVisible(false)}>
          <div className="popup-content flex-col receip-popup" onClick={e => e.stopPropagation()}>
            <h3 className="text-center">Receip</h3>
            
            <div className="flex-col-center gap-1">
              <h2 className="text-center">Ultra Market</h2>
              <p>City : {useStore.getState().player.city?.name || "N/A"}</p>
              <p>Le {new Date().toLocaleDateString()}</p>
            </div>

            <div className="flex-col">
              {selectedProducts.map(item => (
                <div key={item.id} className="flex flex-between">
                  <p>{item.brand}, {item.name}</p>
                  <p>...</p>
                  <p>{(item.price * multiplier).toFixed(2)} €</p>
                </div>
              ))}
            </div>

            <div className="flex-col gap-1">
              <p>TOTAL : {total.toFixed(2)} €</p>
              <p>Including VAT (20%) : {tva.toFixed(2)} €</p>
            </div>

            <p>Thank you for visiting, see you soon!</p>
            
            <div className="flex-center">
              <button 
                onClick={() => navigate('/game/budget/documentation')}
                className="btn-small"
              >
                Go next
              </button>
            </div>
          </div>
        </div>
      )}

      {popupStartVisible && (
        <div className="popup-overlay" id='popup-intro-choices' onClick={() => setPopupStartVisible(false)}>
          <div className="popup-content flex-col gap-3" onClick={e => e.stopPropagation()}>
            
            {popupStartStep === 0 && (
              <>
                <h3>Welcome to your new life {player.character?.name}!</h3>

                <p>You have just moved to your new student town. Your parents have gone home and now you have to fend for yourself... Good luck!</p>
                
                <div className="flex-center">
                  <button className='btn-small' onClick={() => setPopupStartStep(1)}>Understand</button>
                </div>
              </>
            )}

            {popupStartStep === 1 && (
              <>
                <h3>Go shopping</h3>

                <p>In your early days, you decide to do your shopping by going to the nearest shop. You will need to stick to your budget... but also take care of your health. </p>

                <p className="b">Objective: do your shopping for a week.</p>
                
                <div className="flex-center">
                  <button className='btn-small' onClick={() => setPopupStartVisible(false)}>Let's go!</button>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  )
}
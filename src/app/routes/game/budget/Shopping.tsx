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
          alert("Pas assez de budget !");
      }
    }
  }

  const selectedProducts = articlesData.filter(product => 
    selectedProductIds.includes(product.id)
  )

  const totalHTML = selectedProducts.reduce((sum, item) => sum + item.price, 0)
  const total = Math.round(totalHTML * 100) / 100
  const tva = Math.round((total * 0.2) * 100) / 100

  return (
    <>
      <section className="cont-boxed">
        <h1>Shopping game</h1>
        
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">

              {categories.map(([category, products]) => (
                <div className="embla__slide" key={category}>
                  <div className="embla__slide__inner">
                    <h3>Rayon {category}</h3>

                    <div className="flex flex-center flex-wrap gap-2">
                      {products.map(product => {
                        const isSelected = selectedProductIds.includes(product.id)

                        return(
                          <button 
                            key={product.id}
                            className={`product-card flex gap-2 ${isSelected ? "is-selected" : ""}`}
                            onClick={() => toggleProduct(product.id, product.price)}
                          >
                            <div className="flex-col flex-center">
                              <img src={`${import.meta.env.BASE_URL}images/articles/${product.image}.jpg`} alt="" />
                            </div>
                            
                            <div className="flex-col">
                              <p className="brand">{product.brand}</p>
                              <p>{product.name}</p>
                              <NutriScore score={product.nutriscore} />
                              <p>{product.price} €</p>
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

        <div className="flex-center">
          <p>Votre argent : {budget} €</p>
          <button 
            className="btn-large"
            onClick={() => setPopupVisible(true)}
          >
            Valider et payer
          </button>
        </div>
      </section>

      {popupVisible && (
        <div className="popup-overlay" onClick={() => setPopupVisible(false)}>
          <div className="popup-content flex-col" onClick={e => e.stopPropagation()}>
            <h2>Store name</h2>
            <h3>Ticket de caisse</h3>
            <p>Ville : {useStore.getState().player.city?.name || "N/A"}</p>
            <p>{new Date().toLocaleDateString()}</p>

            <hr className="w-full my-2" />

            <table className="receipt-table w-full text-left">
              <thead>
                <tr>
                  <th>Article</th>
                  <th className="text-right">Prix</th>
                </tr>
              </thead>
              <tbody>
                {selectedProducts.map(item => (
                  <tr key={item.id}>
                    <td>{item.brand}, {item.name}</td>
                    <td className="text-right">{item.price.toFixed(2)} €</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <p>TOTAL : {total.toFixed(2)} €</p>
              <p>Dont TVA (20%) : {tva.toFixed(2)} €</p>
            </div>

            <p>Merci de votre visite, à bientôt !</p>
            
            <div>
              <button 
                onClick={() => navigate('/game/budget/documentation')}
                className="btn-small-secondary"
              >
                Passer à la suite
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
                <p>Bienvenue dans votre nouvelle vie {player.character?.name} !</p>
                
                <div className="flex-center">
                  <button className='btn-small' onClick={() => setPopupStartStep(1)}>Next</button>
                </div>
              </>
            )}

            {popupStartStep === 1 && (
              <>
                <p>Commencez par faire vos courses</p>
                
                <div className="flex-center">
                  <button className='btn-small' onClick={() => setPopupStartVisible(false)}>Faire les courses</button>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  )
}
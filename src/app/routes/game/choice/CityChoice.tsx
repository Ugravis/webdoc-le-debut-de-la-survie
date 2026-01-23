import { Link, useNavigate } from 'react-router-dom'
import { type City } from '../../../../data/choices/choices.types'
import { useStore } from '../../../../lib/store/useStore'
import choices from '../../../../data/choices/choices'

export default function CityChoice() {
  const { setCity } = useStore()
  const navigate = useNavigate()
  
  function handleCityChoiceClick(city: City) {
    setCity(city)
    navigate('/game/choice/study')
  }

  return (
    <section className='choices-page cont-boxed flex-col flex-grow flex-col-center gap-6 cont-boxed' id='city-choice-page'>
      <h1 className='flex-center text-center'>Choose your city</h1>

      <div className='flex flex-center flex-wrap gap-4'>
        {choices.city.map((city) => (
          <div 
            className='choice-card' 
            key={city.id}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/city/${city.image}.jpg`} 
              alt={city.image}
              className='choice-img'
            />

            <div className='flex-col mh-3 gap-3'>
              <div className='flex-col-center gap-1'>
                <p className='h4-b'>{city.name}</p>
                <p>{city.department}, {city.region}</p>
              </div>

              <div className='flex-center'>
                <button
                  onClick={() => handleCityChoiceClick(city)}
                  className='btn-small'
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex-center'>
        <Link
          className='blue-link'
          to='/game/choice/study'
        >
          Skip »
        </Link>
      </div>
    </section>
  )
}
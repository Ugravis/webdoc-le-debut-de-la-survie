import { useNavigate } from 'react-router-dom'
import { type Character } from '../../../../data/choices/choices.types'
import { useStore } from '../../../../lib/store/useStore'
import { Link } from "react-router-dom";
import choices from '../../../../data/choices/choices'

export default function CharacterChoice() {
  const { setCharacter } = useStore()
  const navigate = useNavigate()
  
  function handleCharacterChoiceClick(char: Character) {
    setCharacter(char)
    navigate('/game/choice/city')
  }

  return (
    <section className='choices-page cont-boxed flex-col flex-grow flex-col-center gap-6 cont-boxed' id='character-choice-page'>
      <h1 className='flex-center text-center'>Choose your character</h1>

      <div className='flex flex-center flex-wrap gap-4'>
        {choices.characters.map((char) => (
          <div 
            className='choice-card'
            key={char.id}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/character/${char.image}.jpg`} 
              alt={char.image}
              className='choice-img'
            />

            <div className='flex-col mh-3 gap-2'>
              <div className='flex-center'>
                <p className='h4-b'>{char.name}, {char.age} ans</p>
              </div>

              <div className='flex-center'>
                <button
                  onClick={() => handleCharacterChoiceClick(char)}
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
          to='/game/choice/city'
        >
          Skip »
        </Link>
      </div>
    </section>
  )
}
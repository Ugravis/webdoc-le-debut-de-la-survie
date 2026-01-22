import { Link, Navigate, useNavigate } from 'react-router-dom'
import { type StudyOption } from '../../../../data/choices/choices.types'
import { useStore } from '../../../../lib/store/useStore'
import choices from '../../../../data/choices/choices'

export default function StudyChoice() {
  const { player, setStudy } = useStore()
  const navigate = useNavigate()

  if (!player.city) {
    return <Navigate to="/game/choice/city" replace />
  }
  
  function handleStudyChoiceClick(study: StudyOption) {
    setStudy(study)
    navigate('/game/social-life/chat')
  }

  return (
    <section className='choices-page cont-boxed flex-col flex-grow flex-col-center gap-6 cont-boxed' id='study-choice-page'>
      <h1 className='flex-center text-center'>Choose your studies</h1>

      <div className='flex flex-center flex-wrap gap-4'>
        {choices.studies[player.city?.studiesNodeId].options.map((study) => (
          <div 
            className='choice-card' 
            key={study.id}
          >
            <img 
              src={`/src/assets/images/study/${study.image}.jpg`} 
              alt={study.image}
              className='choice-img'
            />

            <div className='flex-col m-3 gap-3'>
              <div className='flex-col-center gap-1 text-center'>
                <p className='h4-b'>{study.field}</p>
                <p>{study.school}, {study.university}</p>
              </div>

              <div className='flex-center'>
                <button
                  onClick={() => handleStudyChoiceClick(study)}
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
          to='/game/social-life/chat'
        >
          Skip »
        </Link>
      </div>
    </section>
  )
}
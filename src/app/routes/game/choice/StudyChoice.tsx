import { Navigate, useNavigate } from 'react-router-dom'
import { type StudyOption } from '../../../../data/choices/choices.types'
import { useStore } from '../../../../lib/store/useStore'
import choices from '../../../../data/choices/choices'
import { useState } from 'react'

export default function StudyChoice() {
  const [popupVisible, setPopupVisible] = useState(false)
  const { player, setStudy } = useStore()
  const navigate = useNavigate()

  if (!player.city) {
    return <Navigate to="/game/choice/city" replace />
  }
  
  function handleStudyChoiceClick(study: StudyOption) {
    setStudy(study)
    setPopupVisible(true)
  }

  return (
    <>
      <section className='choices-page cont-boxed flex-col flex-grow flex-col-center gap-6 cont-boxed' id='study-choice-page'>
        <h1 className='flex-center text-center'>Choose your studies</h1>

        <div className='flex flex-center flex-wrap gap-4'>
          {choices.studies[player.city?.studiesNodeId].options.map((study) => (
            <div 
              className='choice-card' 
              key={study.id}
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/study/${study.id}.jpg`} 
                alt={study.school}
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
      </section>

      {popupVisible && (
        <div className="popup-overlay" id='popup-intro-choices' onClick={() => setPopupVisible(false)}>
          <div className="popup-content flex-col gap-3" onClick={e => e.stopPropagation()}>
            <div className="images flex gap-2">
              <img src={`${import.meta.env.BASE_URL}images/character/${player.character?.image}.jpg`} alt={player.character?.image} className='img-1' />

              <div className='flex-col gap-2'>
                <img src={`${import.meta.env.BASE_URL}images/study/${player.studies?.id}.jpg`} alt={player.studies?.school} className='img-2' />
                <img src={`${import.meta.env.BASE_URL}images/city/${player.city?.image}.jpg`} alt={player.city.name} className='img-3' />
              </div>
            </div>

            <div className='bottom flex-col-center gap-3'>
              <p>Ready to start your new life?</p>

              <div className='gap-1'>
                <button className='btn-small-secondary' onClick={() => navigate('/game/choice/character')}>Modify</button>
                <button className='btn-small' onClick={() => navigate('/game/budget/shopping')}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
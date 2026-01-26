import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useStore } from '../../../../lib/store/useStore'
import examsData from "../../../../data/exam/exams"

export default function Exam() {
  const navigate = useNavigate()
  const [popupVisible, setPopupVisible] = useState(true)
  
  // 1. Récupérer les infos du store
  const studyField = useStore((state) => state.player.studies?.field)
  
  // 2. Trouver les questions correspondantes au domaine d'étude
  const currentExam = examsData.find((exam) => exam.field === studyField) || examsData[0]
  
  // 3. États pour le suivi du QCM
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const currentQuestion = currentExam.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === currentExam.questions.length - 1

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedAnswer === null) return

    // Vérifier si la réponse est correcte
    if (currentQuestion.answers[selectedAnswer].isCorrect) {
      setScore((prev) => prev + 1)
    }

    if (isLastQuestion) {
      // Optionnel : Tu pourrais ici utiliser setSchool() pour mettre à jour les stats du joueur selon son score
      navigate("/game/conclusion")
    } else {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null) // Reset pour la question suivante
    }
  }

  return (
    <>
      <section className="cont-boxed" id="exam-page">
        <div className="exam-container">
          <h2>Exam: {studyField}</h2>
          <div className="progress-bar">
            Question {currentQuestionIndex + 1} / {currentExam.questions.length}
          </div>

          <form onSubmit={handleNext} className="exam-form">
            <h3 className="question-text">{currentQuestion.text}</h3>

            <div className="answers-list flex-col">
              {currentQuestion.answers.map((answer, index) => (
                <label key={index} className={`answer-item ${selectedAnswer === index ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="exam-answer"
                    checked={selectedAnswer === index}
                    onChange={() => setSelectedAnswer(index)}
                    required
                  />
                  {answer.text}
                </label>
              ))}
            </div>

            <button 
              type="submit" 
              className="btn-small" 
              disabled={selectedAnswer === null}
            >
              {isLastQuestion ? "Finish Exam" : "Next Question"}
            </button>
          </form>
        </div>
      </section>

      {/* Popup de départ */}
      {popupVisible && (
        <div className="popup-overlay" onClick={() => setPopupVisible(false)}>
          <div className="popup-content flex-col" onClick={e => e.stopPropagation()}>
            <h2>Final Exam!</h2>
            <p>You are taking the <strong>{studyField}</strong> exam. Good luck!</p>
            <div className="flex-center">
              <button className='btn-small' onClick={() => setPopupVisible(false)}>Ready</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
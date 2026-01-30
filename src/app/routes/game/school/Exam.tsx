import { useState, useMemo } from "react" // Ajout de useMemo
import { useNavigate } from "react-router-dom"
import { useStore } from '../../../../lib/store/useStore'
import examsData from "../../../../data/exam/exams"

export default function Exam() {
  const navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(true);
  const [showResultPopup, setShowResultPopup] = useState(false);
  
  const studyField = useStore((state) => state.player.studies?.field);
  const currentExam = examsData.find((exam) => exam.field === studyField) || examsData[0];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFeedbackMode, setIsFeedbackMode] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = currentExam.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === currentExam.questions.length - 1;

  const shuffledAnswers = useMemo(() => {
    return [...currentQuestion.answers].sort(() => Math.random() - 0.5);
  }, [currentQuestionIndex, currentQuestion]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAnswer === null) return;

    // On vérifie la réponse sur l'objet mélangé
    if (shuffledAnswers[selectedAnswer].isCorrect) {
      setScore((prev) => prev + 1);
    }
    
    setIsFeedbackMode(true);
  };

  const handleProceed = () => {
    if (isLastQuestion) {
      setShowResultPopup(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsFeedbackMode(false);
    }
  };

  return (
    <>
      <section className="cont-boxed flex-col-center gap-6 flex-grow" id="exam-page">
        <h1>The final exam</h1>

        <p>During exams, always stay focused, clear-headed and logical!</p>

        <div className="exam-container flex-col gap-3">
          <div className="flex-center">
            <p className="p2">Question {currentQuestionIndex + 1} / {currentExam.questions.length}</p>
          </div>

          {!isFeedbackMode ? (
            <form onSubmit={handleSubmit} className="exam-form flex-col gap-3">
              <h4 className="question-text b">{currentQuestion.text}</h4>
              <div className="answers-list flex-col gap-2">
                {/* On utilise shuffledAnswers ici au lieu de currentQuestion.answers */}
                {shuffledAnswers.map((answer, index) => (
                  <label key={index} className={`answer-item flex gap-2 ${selectedAnswer === index ? 'selected' : ''}`}>
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
              <div className="flex-center">
                <button type="submit" className="btn-small" disabled={selectedAnswer === null}>
                  Validate Answer
                </button>
              </div>
            </form>
          ) : (
            <div className="feedback-container flex-col">
              {/* On vérifie le feedback sur la liste mélangée */}
              {shuffledAnswers[selectedAnswer!].isCorrect ? (
                <div className="flex-col-center gap-2" style={{ marginBottom: "28px" }}>
                  <h3>Correct!</h3>
                </div>
              ) : (
                <div className="flex-col-center gap-2" style={{ marginBottom: "28px" }}>
                  <h3>Wrong answer...</h3>
                  <p>The correct answer was: <strong>{currentQuestion.answers.find(a => a.isCorrect)?.text}</strong></p>
                </div>
              )}
              
              <div className="flex-center">
                <button onClick={handleProceed} className="btn-small">
                  {isLastQuestion ? "See Results" : "Next Question"}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- POPUPS (Inchangés) --- */}
      {popupVisible && (
        <div className="popup-overlay" onClick={() => setPopupVisible(false)}>
          <div className="popup-content flex-col" onClick={e => e.stopPropagation()}>
            <h3>Time to take an exam!</h3>
            <p>It has now been ten days since you started school at the {studyField} school. Today, you have to take an exam. Good luck!</p>
            <div className="flex-center">
              <button className='btn-small' onClick={() => setPopupVisible(false)}>Start the exam</button>
            </div>
          </div>
        </div>
      )}

      {showResultPopup && (
        <div className="popup-overlay">
          <div className="popup-content flex-col text-center">
            <h3 className="result-score">Your score: <strong>{score} / {currentExam.questions.length}</strong></h3>
            <p>{score === currentExam.questions.length ? "Perfect! You've mastered your field." : "Well done for completing the exam!"}</p>
            <div className="flex-center">
              <button className='btn-small' onClick={() => navigate("/game/conclusion")}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
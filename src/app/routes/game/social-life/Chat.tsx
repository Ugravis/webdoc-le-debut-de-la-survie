import { useEffect, useState, useRef } from "react"
import { type Choice } from "../../../../data/chat/chat.types"
import nodes from "../../../../data/chat/nodesMessages"
import { Link } from "react-router-dom"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default function Chat() {
  const [currentNodeId, setCurrentNodeId] = useState(0)
  const [popupVisible, setPopupVisible] = useState(true)
  const [allMessages, setAllMessages] = useState<any[]>([])
  const [showChoices, setShowChoices] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  // On cherche le noeud actuel
  const currentNode = nodes.find((node) => node.nodeId === currentNodeId)

  useEffect(() => {
    let isCancelled = false
    // Si on n'a plus de noeud, on arrête simplement l'effet sans vider les messages
    if (!currentNode) return

    setShowChoices(false)

    const displaySequentially = async () => {
      for (let i = 0; i < currentNode.messages.length; i++) {
        await sleep(500)
        if (isCancelled) return
 
        setAllMessages((prev) => [...prev, currentNode.messages[i]])
      }

      await sleep(500)
      if (!isCancelled) setShowChoices(true)
    }

    displaySequentially()

    return () => { isCancelled = true }
  }, [currentNodeId, currentNode])

  const handleChoiceClick = (choice: Choice) => {
    const playerMessage = {
      messageId: `player-${currentNodeId}-${Date.now()}`,
      from: "You",
      timestamp: "18:21",
      content: choice.content
    }

    // On ajoute le message du joueur à la suite
    setAllMessages((prev) => [...prev, playerMessage])

    // Log des effets
    choice.playerEffects.forEach((effect) => {
      console.log(`Effet → ${effect.cible}: ${effect.value > 0 ? "+" : ""}${effect.value}`)
    })

    // On passe au noeud suivant
    setCurrentNodeId(choice.nextNodeId)
  }

  return (
    <>
      <section className="cont-boxed flex-col gap-4" id="chat">
        <div className="flex flex-grow flex-around flex-wrap mh-4">
          <div className="flex-col gap-4 text">
            <div className="flex-col gap-3">
              <h1>Class chat group</h1>
              <p>You get a notification on your phone: your class group chat is buzzing again. Everyone seems to have plans for tonight, and you feel a mix of curiosity and fatigue creeping in. Should you join them or stay in by yourself? This choice could shape the rest of your evening...</p>
            </div>

            <img src={`${import.meta.env.BASE_URL}images/illustrations/phone-scene.jpg`} alt="phone-scene" />
          </div>

          <div className="phone flex-col flex-col-between">
            <div className="flex-col gap-2 messages">
              {/* On affiche toujours l'historique accumulé dans allMessages */}
              {allMessages.map((msg) => (
                <div 
                  key={msg.messageId}
                  className={`message ${msg.from === 'You' ? "message-player" : ""}`}
                >
                  <p className="p2"><i>{msg.from}, {msg.timestamp}</i></p>
                  <p className="p2">{msg.content}</p>
                  <div ref={messagesEndRef} />
                </div>
              ))}
            </div>

            {/* Zone d'interaction en bas du téléphone */}
            <div className="choices-area">
              {currentNode ? (
                // Si on a un noeud et que les messages sont finis d'afficher
                showChoices && (
                  <div className="text-center choices-box flex-col gap-2">
                    <p className="p2 b">Choose your answer</p>
                    <span className="separator"></span>

                    {currentNode.choices.map((choice, index) => (
                      <div 
                        className="flex-col gap-2" 
                        key={`${currentNodeId}-choice-${index}`}
                      >
                        <button onClick={() => handleChoiceClick(choice)}>
                          {choice.content}
                        </button>

                        {index < currentNode.choices.length - 1 && (
                          <span className="separator"></span>
                        )}
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="flex-col-center gap-2 next-btn-box">
                  <p className="p2 b">Conversation over!</p>

                  <p className="p2">Your choices are personal, you did your best.</p>

                  <Link to="/game/mental-health/press-review" className="btn-small">
                    Go next
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {popupVisible && (
        <div className="popup-overlay" id='popup-intro-choices' onClick={() => setPopupVisible(false)}>
          <div className="popup-content flex-col gap-3" onClick={e => e.stopPropagation()}>
            <h3>Going out after school</h3>
            <p>Another very important aspect of your student life is your social life. You can go out, but be careful not to overdo it, as this could compromise your academic results.</p>
            <div className="flex-center">
              <button className="btn-small" onClick={() => setPopupVisible(false)}>Discuss in the class group</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
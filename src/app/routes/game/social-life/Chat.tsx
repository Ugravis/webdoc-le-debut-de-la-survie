import { useEffect, useState } from "react"
import { type Choice } from "../../../../data/chat/chat.types"
import nodes from "../../../../data/chat/nodesMessages"
import { Link } from "react-router-dom"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default function Chat() {
  const [currentNodeId, setCurrentNodeId] = useState(0)
  const [allMessages, setAllMessages] = useState<any[]>([])
  const [showChoices, setShowChoices] = useState(false)

  const currentNode = nodes.find((node) => node.nodeId === currentNodeId)

  useEffect(() => {
    let isCancelled = false
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

    setAllMessages((prev) => [...prev, playerMessage])

    choice.playerEffects.forEach((effect) => {
      console.log(`Effet → ${effect.cible}: ${effect.value > 0 ? "+" : ""}${effect.value}`)
    })
    setCurrentNodeId(choice.nextNodeId)
  }

  return (
    <section className="cont-boxed flex-col gap-4" id="chat">
      <div className="flex flex-grow flex-around flex-wrap mh-4">
        <div className="flex-col gap-3 text">
          <h1>Class chat group</h1>
          <p>You get a notification on your phone: your class group chat is buzzing again. Everyone seems to have plans for tonight, and you feel a mix of curiosity and fatigue creeping in. Should you join them or stay in by yourself? This choice could shape the rest of your evening...</p>
        </div>

        <div className="phone flex-col flex-col-between">
          <div className="flex-col gap-2 messages">
            {currentNode ? (
              allMessages.map((msg) => (
                <div 
                  key={msg.messageId}
                  className={`message ${msg.from == 'You' ? "message-player" : ""}`}
                >
                  <p className="p2">{msg.from}, {msg.timestamp}</p>
                  <p className="p2">{msg.content}</p>
                </div>
              ))
            ) : (
              <div className="flex-center">
                <Link to="/game/social-life/interviews" className="btn-small-secondary">Next</Link>
              </div>
            )}
          </div>

          {showChoices && currentNode && (
            <div className="text-center choices-box flex-col gap-2">
              <>
                <p className="p2 b">Choisissez votre réponse</p>
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
              </>
            </div>
          )}
        </div>
      </div>

      <div className='flex-center'>
        <Link
          className='blue-link'
          to='/game/social-life/interviews'
        >
          Skip »
        </Link>
      </div>
    </section>
  )
}
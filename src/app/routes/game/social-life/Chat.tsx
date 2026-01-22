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

  if (!currentNode) {
    return <p className="status-msg">Fin de la conversation.</p>
  }

  return (
    <section className="cont-boxed flex-col gap-4" id="chat">
      <div className="flex flex-grow flex-around flex-wrap">
        <div>
          <h1>Class chat group</h1>
        </div>

        <div className="phone flex-col flex-col-between">
          <div className="flex-col gap-2 messages">
            {allMessages.map((msg) => (
              <div 
                key={msg.messageId}
                className={`message ${msg.from == 'You' ? "message-player" : ""}`}
              >
                <p className="p2">{msg.from}, {msg.timestamp}</p>
                <p className="p2">{msg.content}</p>
              </div>
            ))}
          </div>

          {showChoices && (
            <div className="text-center choices-box flex-col gap-2">
              <p className="p2 b">Choisissez votre réponse</p>

              <span className="separator"></span>

              {currentNode.choices.map((choice, index) => (
                <div 
                  className="flex-col gap-2" 
                  key={`${currentNodeId}-choice-${index}`}
                  >
                  <button
                    onClick={() => handleChoiceClick(choice)}  
                  >
                    {choice.content}
                  </button>

                  {index < currentNode.choices.length - 1 && (
                    <span className="separator"></span>
                  )}
                </div>
              ))}
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
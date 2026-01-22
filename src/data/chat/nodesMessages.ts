import { type Nodes } from './chat.types'

export default [
  {
    "nodeId": 0,
    "messages": [
      {
        "messageId": 0,
        "from": "Alice",
        "content": "Salut tout le monde ! Ça vous dirait de sortir ce soir ?",
        "timestamp": "18:02"
      }, {
        "messageId": 1,
        "from": "Bob",
        "content": "Oui, ça fait longtemps qu’on n’a rien fait ensemble.",
        "timestamp": "18:03"
      }
    ],
    "choices": [
      {
        "content": "Pourquoi pas, ça me ferait du bien de sortir un peu.",
        "timestamp": "18:02",
        "nextNodeId": 1,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 5 },
          { "cible": "budget", "value": -5 },
          { "cible": "school", "value": 0 }
        ]
      }, {
        "content": "Désolé, je préfère rester chez moi ce soir.",
        "timestamp": "18:02",
        "nextNodeId": 2,
        "playerEffects": [
          { "cible": "mentalHealth", "value": -2 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 1 }
        ]
      }
    ]
  },

  {
    "nodeId": 1,
    "messages": [
      {
        "messageId": 2,
        "from": "Charlie",
        "content": "Cool ! On pourrait aller boire un verre en ville.",
        "timestamp": "18:10"
      }, {
        "messageId": 3,
        "from": "Alice",
        "content": "Oui, mais pas trop tard, j’ai cours demain.",
        "timestamp": "18:11"
      }
    ],
    "choices": [
      {
        "content": "Ok, mais je rentrerai assez tôt.",
        "timestamp": "18:02",
        "nextNodeId": 3,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 3 },
          { "cible": "budget", "value": -3 },
          { "cible": "school", "value": 1 }
        ]
      }, {
        "content": "Finalement, je ne le sens pas trop, je vais décliner.",
        "timestamp": "18:02",
        "nextNodeId": 4,
        "playerEffects": [
          { "cible": "mentalHealth", "value": -4 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 0 }
        ]
      }
    ]
  },

  {
    "nodeId": 2,
    "messages": [
      {
        "messageId": 4,
        "from": "Bob",
        "content": "Dommage, on pensait que ça vous changerait les idées.",
        "timestamp": "18:09"
      }, {
        "messageId": 5,
        "from": "Alice",
        "content": "On remettra ça une autre fois alors.",
        "timestamp": "18:10"
      }
    ],
    "choices": [
      {
        "content": "En fait, vous avez raison, je viens quand même.",
        "timestamp": "18:02",
        "nextNodeId": 1,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 4 },
          { "cible": "budget", "value": -5 },
          { "cible": "school", "value": -1 }
        ]
      }, {
        "content": "Merci de comprendre, j’ai vraiment besoin de repos.",
        "timestamp": "18:02",
        "nextNodeId": 5,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 2 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 2 }
        ]
      }
    ]
  }

] satisfies Nodes
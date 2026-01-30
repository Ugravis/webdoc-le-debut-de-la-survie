import { type Nodes } from './chat.types'

export default [
  {
    "nodeId": 0,
    "messages": [
      {
        "messageId": 0,
        "from": "Alice",
        "content": "GUYS! First week is finally over. We should definitely go out tonight to celebrate surviving 🥂",
        "timestamp": "18:02"
      }, {
        "messageId": 1,
        "from": "Bob",
        "content": "I'm so down. My brain is officially fried after that lecture. Where are we heading?",
        "timestamp": "18:03"
      }
    ],
    "choices": [
      {
        "content": "Let's hit that new bar! First round is on me 🍻",
        "timestamp": "18:04",
        "nextNodeId": 1,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 8 },
          { "cible": "budget", "value": -15 },
          { "cible": "school", "value": -2 }
        ]
      }, {
        "content": "I'm literally so broke right now... can we do something cheaper? 💸",
        "timestamp": "18:04",
        "nextNodeId": 2,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 2 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 0 }
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
        "content": "Legend! But wait, Alice, didn't you say we have that Econ quiz tomorrow morning?",
        "timestamp": "18:06"
      }, {
        "messageId": 3,
        "from": "Alice",
        "content": "Ugh, don't remind me... 💀 Maybe just one drink? A quick vibe check?",
        "timestamp": "18:07"
      }
    ],
    "choices": [
      {
        "content": "Just one drink. We'll be back by 10 PM, promise.",
        "timestamp": "18:08",
        "nextNodeId": 3,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 4 },
          { "cible": "budget", "value": -5 },
          { "cible": "school", "value": 2 }
        ]
      }, {
        "content": "Actually, if there's a quiz, I should probably stay and study 📚",
        "timestamp": "18:08",
        "nextNodeId": 4,
        "playerEffects": [
          { "cible": "mentalHealth", "value": -5 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 10 }
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
        "content": "Fair enough. What if we just order pizza at my place and watch a movie? Chill vibes.",
        "timestamp": "18:10"
      }
    ],
    "choices": [
      {
        "content": "I'm down for pizza! I'll bring some snacks 🍕",
        "timestamp": "18:11",
        "nextNodeId": 3,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 6 },
          { "cible": "budget", "value": -8 },
          { "cible": "school", "value": 0 }
        ]
      }, {
        "content": "I think I just need to sleep for 100 years to be honest.",
        "timestamp": "18:11",
        "nextNodeId": 5,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 5 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 2 }
        ]
      }
    ]
  },
  {
    "nodeId": 3,
    "messages": [
      {
        "messageId": 5,
        "from": "Charlie",
        "content": "Wait! Someone just posted in the group chat that the Prof cancelled the quiz!",
        "timestamp": "18:15"
      }, {
        "messageId": 6,
        "from": "Alice",
        "content": "NO WAY! 😍 In that case... should we hit the club instead? It's Freshers Night!",
        "timestamp": "18:16"
      }
    ],
    "choices": [
      {
        "content": "THE UNIVERSE HAS SPOKEN! Let's party! 🔥",
        "timestamp": "18:17",
        "nextNodeId": 6,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 15 },
          { "cible": "budget", "value": -25 },
          { "cible": "school", "value": -15 }
        ]
      }, {
        "content": "Still sounds a bit much. Let's just stick to the original plan.",
        "timestamp": "18:17",
        "nextNodeId": 6,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 2 },
          { "cible": "budget", "value": -5 },
          { "cible": "school", "value": 0 }
        ]
      }
    ]
  },
  {
    "nodeId": 4,
    "messages": [
      {
        "messageId": 7,
        "from": "Alice",
        "content": "If you're studying, can I come over? I don't get the last chapter at all... 🙏",
        "timestamp": "18:20"
      }
    ],
    "choices": [
      {
        "content": "Sure, come over. We can figure it out together.",
        "timestamp": "18:21",
        "nextNodeId": 6,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 3 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 12 }
        ]
      }, {
        "content": "I really need to focus alone tonight, sorry Alice!",
        "timestamp": "18:21",
        "nextNodeId": 5,
        "playerEffects": [
          { "cible": "mentalHealth", "value": -3 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 15 }
        ]
      }
    ]
  },
  {
    "nodeId": 5,
    "messages": [
      {
        "messageId": 8,
        "from": "Bob",
        "content": "Actually, I'm feeling pretty lazy too. Anyone want to play some Apex for an hour? 🎮",
        "timestamp": "18:25"
      }
    ],
    "choices": [
      {
        "content": "Okay, one hour of gaming and then sleep. Deal.",
        "timestamp": "18:26",
        "nextNodeId": 6,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 5 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": -2 }
        ]
      }, {
        "content": "I'm turning my phone off now. See you guys tomorrow! 👋",
        "timestamp": "18:26",
        "nextNodeId": 6,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 10 },
          { "cible": "budget", "value": 0 },
          { "cible": "school", "value": 5 }
        ]
      }
    ]
  },
  {
    "nodeId": 6,
    "messages": [
      {
        "messageId": 9,
        "from": "Alice",
        "content": "Last thing! Charlie is ordering the official Uni Hoodies. 20% off if we buy now. You in?",
        "timestamp": "18:30"
      }
    ],
    "choices": [
      {
        "content": "Definitely, I need that campus merch! 🧥",
        "timestamp": "18:31",
        "nextNodeId": 7,
        "playerEffects": [
          { "cible": "mentalHealth", "value": 8 },
          { "cible": "budget", "value": -40 },
          { "cible": "school", "value": 0 }
        ]
      }, {
        "content": "Too expensive for me right now. I'll pass.",
        "timestamp": "18:31",
        "nextNodeId": 7,
        "playerEffects": [
          { "cible": "mentalHealth", "value": -2 },
          { "cible": "budget", "value": 10 },
          { "cible": "school", "value": 0 }
        ]
      }
    ]
  }
] satisfies Nodes
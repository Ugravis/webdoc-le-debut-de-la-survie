import { type ChoicesData } from './choices.types.ts'

const choicesData: ChoicesData = {
  
  // Character

  "characters": [
    {
      "id": 0,
      "name": "Roméo",
      "age": 17,
      "image": "character1"
    }, {
      "id": 1,
      "name": "Sofia",
      "age": 18,
      "image": "character2"
    }
  ],

  // City

  "city": [
    {
      "id": 0,
      "name": "Reims",
      "department": "Aube",
      "region": "Grand Est",
      "image": "city1",
      "effects": [
        { "cible": "budget", "value": +0.2 },
        { "cible": "mentalHealth", "value": 0 }
      ],
      "studiesNodeId": 0
    }, {
      "id": 1,
      "name": "Lille",
      "department": "Nord",
      "region": "Hauts de France",
      "image": "city2",
      "effects": [
        { "cible": "budget", "value": -0.2 },
        { "cible": "mentalHealth", "value": +0.2 }
      ],
      "studiesNodeId": 1
    }, {
      "id": 2,
      "name": "Paris",
      "department": "Paris",
      "region": "Île de France",
      "image": "city3",
      "effects": [
        { "cible": "budget", "value": -0.4 },
        { "cible": "mentalHealth", "value": -0.2 }
      ],
      "studiesNodeId": 2
    }
  ],

  // Study

  studies: [
    {
      id: 0, 
      nodeId: 0,
      options: [
        { id: 0, university: "Université de Reims Champagne-Ardenne", school: "UFR de droit", field: "Law" },
        { id: 1, university: "Université de Reims Champagne-Ardenne", school: "IUT de Reims", field: "Computer science" },
        { id: 2, university: "Université de Reims Champagne-Ardenne", school: "UFR de médecine", field: "Biology" }
      ]
    }, {
      id: 1, 
      nodeId: 1,
      options: [
        { id: 3, university: "Université de Lille", school: "Faculté des sciences juridiques", field: "Law" },
        { id: 4, university: "Université de Lille", school: "IUT de Lille", field: "Computer science" },
        { id: 5, university: "Université Catholique de Lille", school: "Faculté de médecine", field: "Biology" }
      ]
    }, {
      id: 2, 
      nodeId: 2,
      options: [
        { id: 6, university: "Sorbonne Université", school: "Ecole de droit", field: "Law" },
        { id: 7, university: "Université Paris-Descartes", school: "IUT de Paris", field: "Computer science" },
        { id: 8, university: "Université Paris-Saclay", school: "Faculté de médecine", field: "Biology" }
      ]
    }
  ]
}

export default choicesData
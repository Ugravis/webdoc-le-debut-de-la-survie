import { type ChoicesData } from './choices.types.ts'

const choicesData: ChoicesData = {
  
  // Character

  "characters": [
    {
      "id": 0,
      "name": "Adam",
      "age": 17,
      "image": "character1"
    }, {
      "id": 1,
      "name": "Sophie",
      "age": 17,
      "image": "character2"
    }, {
      "id": 2,
      "name": "Jean",
      "age": 18,
      "image": "character3"
    }
  ],

  // City

  "city": [
    {
      "id": 0,
      "name": "Reims",
      "department": "Aube",
      "region": "Grand Est",
      "comment": "A medium-sized town in eastern France.",
      "image": "city1",
      "price": 1,
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
      "comment": "A dynamic metropolis that is very lively at night.",
      "image": "city2",
      "price": 1.15,
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
      "comment": "You won't get bored, but watch out for the prices.",
      "image": "city3",
      "price": 1.25,
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
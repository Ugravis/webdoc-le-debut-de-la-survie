import { type ChoicesData } from './choices.types.ts'

const choicesData: ChoicesData = {
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

  studies: [
    {
      id: 0, 
      nodeId: 0,
      options: [
        { id: 0, university: "Université de Reims Champagne-Ardenne", school: "IUT de Reims", field: "Informatique", "image": "study1" },
        { id: 1, university: "Université de Reims Champagne-Ardenne", school: "ESAD", field: "Arts", "image": "study2" },
        { id: 2, university: "Université de Reims Champagne-Ardenne", school: "Faculté de Droit", field: "Droit", "image": "study3" }
      ]
    }, {
      id: 1, 
      nodeId: 1,
      options: [
        { id: 0, university: "Université de Lille", school: "Faculté d'informatique", field: "Informatique", "image": "study4" },
        { id: 1, university: "Université de Lille", school: "SKEMA", field: "Commerce", "image": "study5" },
        { id: 2, university: "Université Catholique de Lille", school: "ESPOL", field: "Sciences politiques", "image": "study6" }
      ]
    }, {
      id: 2, 
      nodeId: 2,
      options: [
        { id: 0, university: "Sorbonne Université", school: "Faculté de médecine", field: "Médecine", "image": "study7" },
        { id: 1, university: "Université Paris-Descartes", school: "IUT de Paris", field: "Communication", "image": "study8" },
        { id: 2, university: "Université Gustave Eiffel", school: "IMAC", field: "Info Com", "image": "study9" }
      ]
    }
  ]
}

export default choicesData
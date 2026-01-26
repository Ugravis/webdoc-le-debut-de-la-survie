const examsData = [
  {
    field: "Law",
    questions: [
      {
        text: "In France, what is the legal blood alcohol limit for an experienced driver?",
        answers: [
          { text: "0.5 grams per liter", isCorrect: true },
          { text: "0.8 grams per liter", isCorrect: false },
          { text: "1.0 gram per liter", isCorrect: false }
        ]
      },
      {
        text: "What does the 'Right to Image' mean in French law?",
        answers: [
          { text: "You need permission to publish a photo of someone", isCorrect: true },
          { text: "You can take photos of anything in public", isCorrect: false },
          { text: "Only celebrities have privacy rights", isCorrect: false }
        ]
      },
      {
        text: "How long is a standard cooling-off period for an online purchase?",
        answers: [
          { text: "14 days", isCorrect: true },
          { text: "2 days", isCorrect: false },
          { text: "30 days", isCorrect: false }
        ]
      },
      {
        text: "Who has the power to pass laws in France?",
        answers: [
          { text: "The Parliament", isCorrect: true },
          { text: "The Police", isCorrect: false },
          { text: "The Prefects", isCorrect: false }
        ]
      },
      {
        text: "At what age do you gain full 'Legal Capacity' in France?",
        answers: [
          { text: "18 years old", isCorrect: true },
          { text: "16 years old", isCorrect: false },
          { text: "21 years old", isCorrect: false }
        ]
      },
      {
        text: "What is the role of a 'Notaire' during a house sale?",
        answers: [
          { text: "To certify the contract and collect taxes", isCorrect: true },
          { text: "To help the buyer find a mortgage", isCorrect: false },
          { text: "To negotiate the price of the house", isCorrect: false }
        ]
      }
    ]
  },
  {
    field: "Computer Science",
    questions: [
      {
        text: "What is the best way to protect your online accounts?",
        answers: [
          { text: "Using a unique, complex password", isCorrect: true },
          { text: "Using '123456' so you don't forget it", isCorrect: false },
          { text: "Using your birth date as a password", isCorrect: false }
        ]
      },
      {
        text: "What does 'Wi-Fi' allow you to do?",
        answers: [
          { text: "Connect to the internet without a cable", isCorrect: true },
          { text: "Charge your phone battery", isCorrect: false },
          { text: "Increase your cellular signal", isCorrect: false }
        ]
      },
      {
        text: "What is a 'Spam' email?",
        answers: [
          { text: "An unwanted or fraudulent message", isCorrect: true },
          { text: "A message from a close friend", isCorrect: false },
          { text: "An update from the government", isCorrect: false }
        ]
      },
      {
        text: "In your browser, what does the padlock icon mean?",
        answers: [
          { text: "The connection to the site is secure", isCorrect: true },
          { text: "The website is blocked", isCorrect: false },
          { text: "The computer is out of memory", isCorrect: false }
        ]
      },
      {
        text: "What is the 'Cloud' used for?",
        answers: [
          { text: "Storing files on remote servers", isCorrect: true },
          { text: "Predicting the weather", isCorrect: false },
          { text: "Cleaning the computer screen", isCorrect: false }
        ]
      },
      {
        text: "What is a 'Cookie' on a website?",
        answers: [
          { text: "A small file that tracks your preferences", isCorrect: true },
          { text: "A type of computer virus", isCorrect: false },
          { text: "A digital payment method", isCorrect: false }
        ]
      }
    ]
  },
  {
    field: "Biology",
    questions: [
      {
        text: "What is the main role of the heart?",
        answers: [
          { text: "To pump blood through the body", isCorrect: true },
          { text: "To filter toxins from water", isCorrect: false },
          { text: "To produce oxygen", isCorrect: false }
        ]
      },
      {
        text: "How do vaccines work?",
        answers: [
          { text: "They train the immune system to recognize a virus", isCorrect: true },
          { text: "They immediately kill all bacteria", isCorrect: false },
          { text: "They change your DNA to make it stronger", isCorrect: false }
        ]
      },
      {
        text: "Which organ is primarily responsible for breathing?",
        answers: [
          { text: "The Lungs", isCorrect: true },
          { text: "The Stomach", isCorrect: false },
          { text: "The Liver", isCorrect: false }
        ]
      },
      {
        text: "What is 'Antibiotic Resistance'?",
        answers: [
          { text: "When bacteria no longer respond to medicine", isCorrect: true },
          { text: "When a person is allergic to pills", isCorrect: false },
          { text: "When a virus becomes a bacteria", isCorrect: false }
        ]
      },
      {
        text: "Which nutrient is the main source of energy for the brain?",
        answers: [
          { text: "Glucose (sugar)", isCorrect: true },
          { text: "Protein", isCorrect: false },
          { text: "Fiber", isCorrect: false }
        ]
      },
      {
        text: "What is the function of red blood cells?",
        answers: [
          { text: "To carry oxygen to the organs", isCorrect: true },
          { text: "To fight off viruses", isCorrect: false },
          { text: "To help the blood clot after a cut", isCorrect: false }
        ]
      }
    ]
  }
]

export default examsData;
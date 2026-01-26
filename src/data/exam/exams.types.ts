export interface Answer {
  text: string
  isCorrect: boolean
}

export interface Question {
  text: string
  answers: Answer[]
}

export interface ExamField {
  field: string
  questions: Question[]
}

export type ExamsData = ExamField[]
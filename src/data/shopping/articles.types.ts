export type Nutriscore = 1 | 2 | 3 | 4

export interface Article {
  id: number
  name: string
  category: string
  brand: string
  price: number
  nutriscore: Nutriscore
  image: string
}

export type Articles = Article[]
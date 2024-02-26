import { Category } from './category.model'

export interface Note {
  id: number
  title: string
  content: string
  created_at: Date
  updated_at: Date
  archived: boolean
  categories: Category[]
}

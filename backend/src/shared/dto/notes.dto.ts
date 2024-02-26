export interface CreateNoteDto {
  title: string
  content: string
  categories: number[]
}

export interface UpdateNoteDto {
  title: string
  content: string
  categories: number[]
}

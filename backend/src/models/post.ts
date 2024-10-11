export interface Post {
  id: string
  title: string
  summary?: string
  content: string
  images: string[]
  type: ['artigo', 'dica', 'atividade', 'noticia']
  published: boolean
  authorId: string
  createdAt: Date
  updatedAt: Date
}
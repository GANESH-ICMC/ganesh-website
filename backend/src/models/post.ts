export interface Post {
  id: string
  title: string
  summary?: string
  type: 'artigo' | 'dica' | 'atividade' | 'noticia'
  createdAt: Date
  published: boolean
  authorGithub: string
}

export interface PostForm {
  id: string
  title: string
  summary?: string
  content: string
  images: string[]
  createdAt: Date
  type: 'artigo' | 'dica' | 'atividade' | 'noticia'
  published: boolean
  authorGithub: string
}

export const postTypes = ["artigo", "dica", "atividade", "noticia"];
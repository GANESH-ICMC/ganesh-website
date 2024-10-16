export type PostType = 'artigo' | 'dica' | 'atividade' | 'notícia';
export const postTypes: PostType[] = ['artigo', 'dica', 'atividade', 'notícia'];

export interface Post {
  id: string
  title: string
  summary?: string
  type: PostType
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
  type: PostType
  published: boolean
  authorGithub: string
  authorName: string
  authorAvatar?: string
}

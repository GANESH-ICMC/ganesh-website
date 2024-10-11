export interface User {
  id: string
  email: string
  name?: string
  password: string
  createdAt: Date
  updatedAt: Date
  role: 'USER' | 'ADMIN'
}
import { z } from "zod"
 
export const signInSchema = z.object({
  email: z.string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z.string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const PostSchema = z.object({
  title: z.string().min(5).max(50),
  summary: z.string().min(3).max(200),
  content: z.string().min(3),
  images: z.array(z.string()),
  type: z.enum(['artigo', 'dica', 'atividade', 'notícia']),
  published: z.boolean(),
  authorGithub: z.string(),
  authorId: z.string(),
})

export const AuthorSchema = z.object({
  id: z.string(),
  github: z.string(),
  name: z.string().optional(),
  avatar: z.string().optional(),
});
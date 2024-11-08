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
  title: z.string().min(5).max(100),
  title_en: z.string(),
  summary: z.string().min(3).max(400),
  summary_en: z.string(),
  content: z.string().min(3),
  content_en: z.string(),
  images: z.array(z.string()),
  type: z.enum(['artigo', 'dica', 'atividade', 'notícia']),
  published: z.boolean(),
  authorGithub: z.string(),
  authorId: z.string(),
  createdAt: z.date(),
})

export const AuthorSchema = z.object({
  id: z.string(),
  github: z.string(),
  name: z.string().optional(),
  avatar: z.string().optional(),
});

export const SponsorSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
  link: z.string(),
  description: z.string().optional(),
  description_en: z.string().optional(),
});

export const VideoSchema = z.object({
  id: z.string(),
  title: z.string(),
  title_en: z.string().optional(),
  description: z.string().optional(),
  description_en: z.string().optional(),
  url: z.string(),
  thumbnail: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
'use server'

import { z } from "zod";
import prisma from "@/services/prisma";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  title: z.string().min(5).max(50),
  summary: z.string().min(3).max(200),
  content: z.string().min(3),
  images: z.array(z.string()),
  type: z.enum(['artigo', 'dica', 'atividade', 'noticia']),
  published: z.boolean(),
  authorId: z.string()
})

const CreatePost = FormSchema.omit({ authorId: true })
const UpdatePost = FormSchema.omit({ authorId: true })

export const createPost = async (formData: FormData) => { 
  const validatedFields = CreatePost.safeParse({
    title: formData.get('title'),
    summary: formData.get('summary'),
    content: formData.get('content'),
    images: formData.getAll('images'),
    type: formData.get('type'),
    published: formData.get('published') === 'true',
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error }
  }

  try {
    const post = await prisma.post.create({
      data: {
        ...validatedFields.data,
        authorId: "1"
      }
    })
  } catch (e) {
    return {
      error: e,
      message: 'Database Error: Could not create post',
     }
  }

  revalidatePath('/posts');
  redirect('/posts');
}

export const updatePost = async (id: string, formData: FormData) => {
  const validatedFields = UpdatePost.safeParse({
    title: formData.get('title'),
    summary: formData.get('summary'),
    content: formData.get('content'),
    images: formData.getAll('images'),
    type: formData.get('type'),
    published: formData.get('published') === 'true',
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error }
  }

  try {
    const post = await prisma.post.update({
      where: { id },
      data: validatedFields.data
    })
  } catch (e) {
    return {
      error: e,
      message: 'Database Error: Could not update post',
    }
  }

  revalidatePath('/posts');
  redirect('/posts');
}

export const deletePost = async (id: string) => {
  try {
    const post = await prisma.post.delete({
      where: { id }
    })
  } catch (e) {
    return {
      error: e,
      message: 'Database Error: Could not delete post',
    }
  }

  revalidatePath('/posts');
  redirect('/posts');
}
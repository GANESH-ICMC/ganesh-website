"use server"

import prisma from "@/services/prisma";
import { revalidatePath } from 'next/cache';
import { AuthorSchema } from "@/lib/zod";
import { verifyAndRedirect } from "@/lib/session";

export const addAuthor = async (github: string) => {
  verifyAndRedirect();
  
  try {
    const authorExists = await prisma.author.findUnique({
      where: { github },
    });

    if (authorExists) {
      return authorExists;
    } else {
      const response = await fetch(`https://api.github.com/users/${github}`);
      const user = await response.json();

      const newAuthor = await prisma.author.create({
        data: {
          github: user.login,
          name: user.name,
          avatar: user.avatar_url,
        }
      });
      
      revalidatePath('/authors');
      return newAuthor;
    }
  } catch (e) {
    console.error(e);
  }  
}

export const updateAuthor = async (id: string, formData: FormData) => {
  verifyAndRedirect();

  const validatedFields = AuthorSchema.safeParse({
    id,
    github: formData.get('github'),
    name: formData.get('name'),
    avatar: formData.get('avatar'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Author.',
    };
  }

  try {
    const author = await prisma.author.update({
      where: { id },
      data: {
        github: validatedFields.data.github,
        name: validatedFields.data.name,
        avatar: validatedFields.data.avatar,
      }
    });

    revalidatePath('/authors');
    return author;
  } catch (e) {
    console.error(e);
  }
}

export const deleteAuthor = async (id: string) => {
  verifyAndRedirect();

  try {
    const author = await prisma.author.findUnique({
      where: { id },
      include: {
        posts: true
      },
    });

    if (!author) {
      console.error('Author not found');
      return;
    }
    
    if (author.posts.length > 0) {
      console.error('Author has posts');
      return;
    }

    await prisma.author.delete({
      where: { id },
    });

    revalidatePath('/authors');
  } catch (e) {
    console.error(e);
  }
}
'use server'

import prisma from "@/services/prisma";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { addAuthor } from "./author";
import { PostSchema } from "@/lib/zod";
import { verifyAndRedirect } from "@/lib/session";
import translate from 'translate';

translate.engine = 'deepl';
translate.key = process.env.DEEPL_API_KEY;

const CreatePost = PostSchema.omit({ authorId: true })
const UpdatePost = PostSchema.omit({ authorId: true })

export type State = {
  errors?: {
    title?: string[];
    summary?: string[];
    content?: string[];
    status?: string[];
    type?: string[];
    published?: string[];
    images?: string[];
    authorGithub?: string[];
  };
  message?: string | null;
};

export const createPost = async (prevState: State, formData: FormData): Promise<State> => {
  verifyAndRedirect();

  const validatedFields = CreatePost.safeParse({
    title: formData.get('title'),
    summary: formData.get('summary'),
    content: formData.get('content'),
    images: formData.getAll('images'),
    type: formData.get('typeId'),
    published: formData.get('published') === 'true',
    authorGithub: formData.get('authorGithub')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Post.',
    };
  }

  try {
    const newAuthor = await addAuthor(validatedFields.data.authorGithub);

    if (newAuthor) {
      const title_en = await translate(validatedFields.data.title, { from: 'pt', to: 'en' });
      const summary_en = await translate(validatedFields.data.summary, { from: 'pt', to: 'en' });
      const content_en = await translate(validatedFields.data.content, { from: 'pt', to: 'en' });

      console.log(title_en);

      await prisma.post.create({
        data: {
          title: validatedFields.data.title,
          title_en: title_en,
          summary: validatedFields.data.summary,
          summary_en: summary_en,
          content: validatedFields.data.content,
          content_en: content_en,
          images: validatedFields.data.images,
          type: validatedFields.data.type,
          published: validatedFields.data.published,
          author: {
            connect: {
              github: newAuthor.github,
              name: newAuthor.name,
              avatar: newAuthor.avatar,
            },
          }
        }
      })
    }
  } catch (e) {
    console.error(e);
    return {
      message: 'Database Error: Could not create post',
    }
  }

  revalidatePath('/admin/dashboard/posts');
  redirect('/admin/dashboard/posts');
}

export const updatePost = async (prevState: State, formData: FormData, id: string): Promise<State> => {
  verifyAndRedirect();

  const validatedFields = UpdatePost.safeParse({
    title: formData.get('title'),
    title_en: formData.get('title_en'),
    summary: formData.get('summary'),
    summary_en: formData.get('summary_en'),
    content: formData.get('content'),
    content_en: formData.get('content_en'),
    images: formData.getAll('images'),
    type: formData.get('typeId'),
    published: formData.get('published') === 'true',
    authorGithub: formData.get('authorGithub')
  })

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Could not update post',
    };
  }

  try {
    const author = await addAuthor(validatedFields.data.authorGithub);

    if (!author) {
      return {
        message: 'Could not find author',
      }
    }

    await prisma.post.update({
      where: { id },
      data: {
        title: validatedFields.data.title,
        title_en: validatedFields.data.title_en,
        summary: validatedFields.data.summary,
        summary_en: validatedFields.data.summary_en,
        content: validatedFields.data.content,
        content_en: validatedFields.data.content_en,
        images: validatedFields.data.images,
        type: validatedFields.data.type,
        published: validatedFields.data.published,
        author: {
          connect: {
            github: author.github,
            name: author.name,
            avatar: author.avatar,
          },
        }
      }
    })
  } catch (e) {
    console.error(e);
    return {
      message: 'Database Error: Could not update post',
    }
  }

  revalidatePath('/admin/dashboard/posts');
  redirect('/admin/dashboard/posts');
}

export const deletePost = async (id: string) => {
  verifyAndRedirect();

  try {
    await prisma.post.delete({
      where: { id }
    })
    revalidatePath('/admin/dashboard/posts');
    console.log('Deleted post with id:', id);
  } catch (e) {
    console.error(e);
    throw new Error('Database Error: Could not delete post');
  }
}
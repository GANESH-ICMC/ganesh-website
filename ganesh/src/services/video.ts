"use server"

import { VideoSchema } from "@/lib/zod";
import { prisma } from "./prisma";
import { verifyAndRedirect } from "@/lib/session";


export type State = {
  errors?: {
    title?: string[];
    title_en?: string[];
    description?: string[];
    description_en?: string[];
    url?: string[];
    thumbnail?: string[];
  };
  message?: string | null;
};

const CreateVideo = VideoSchema.omit({ id: true, createdAt: true, updatedAt: true })

export const createVideo = async (prevState: State, formData: FormData): Promise<State> => {
  verifyAndRedirect();

  const validatedFields = CreateVideo.safeParse({
    title: formData.get('title'),
    title_en: formData.get('title_en'),
    description: formData.get('description'),
    description_en: formData.get('description_en'),
    url: formData.get('url'),
    thumbnail: formData.get('thumbnail'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Video.',
    };
  }

  try {
    await prisma.video.create({
      data: validatedFields.data,
    });

    return { message: 'Video created successfully!' };
  } catch (e) {
    console.error(e);
    return { message: 'Failed to create Video.' };
  }
}

export const updateVideo = async (prevState: State, formData: FormData, id: string): Promise<State> => {
  verifyAndRedirect();

  const validatedFields = VideoSchema.safeParse({
    title: formData.get('title'),
    title_en: formData.get('title_en'),
    description: formData.get('description'),
    description_en: formData.get('description_en'),
    url: formData.get('url'),
    thumbnail: formData.get('thumbnail'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Video.',
    };
  }

  try {
    await prisma.video.update({
      where: { id },
      data: validatedFields.data,
    });

    return { message: 'Video updated successfully!' };
  } catch (e) {
    console.error(e);
    return { message: 'Failed to update Video.' };
  }
}

export const deleteVideo = async (id: string): Promise<void> => {
  verifyAndRedirect();

  try {
    await prisma.video.delete({
      where: { id },
    });
  } catch (e) {
    console.error(e);
  }
}
import { z } from "zod";
import prisma from "@/services/prisma";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  github: z.string(),
  name: z.string().optional(),
  avatar: z.string().optional(),
});

export const addAuthor = async (github: string) => {
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
import { SponsorSchema } from "@/lib/zod";
import { verifyAndRedirect } from "@/lib/session";
import prisma from "./prisma";

export type State = {
  errors?: {
    name?: string[];
    logo?: string[];
    link?: string[];
    description?: string[];
    description_en?: string[];
  };
  message?: string | null;
};

const CreateSponsor = SponsorSchema.omit({ id: true })

export const createSponsor = async (prevState: State, formData: FormData): Promise<State> => { 
  verifyAndRedirect();
  
  const validatedFields = CreateSponsor.safeParse({
    name: formData.get('name'),
    logo: formData.get('logo'),
    link: formData.get('link'),
    description: formData.get('description'),
    description_en: formData.get('description_en'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Sponsor.',
    };
  }

  try {
    await prisma.sponsor.create({
      data: validatedFields.data,
    });

    return { message: 'Sponsor created successfully!' };
  } catch (e) {
    console.error(e);
    return { message: 'Failed to create Sponsor.' };
  }
}

export const updateSponsor = async (id: string, prevState: State, formData: FormData): Promise<State> => {
  verifyAndRedirect();

  const validatedFields = SponsorSchema.safeParse({
    name: formData.get('name'),
    logo: formData.get('logo'),
    link: formData.get('link'),
    description: formData.get('description'),
    description_en: formData.get('description_en'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Sponsor.',
    };
  }

  try {
    await prisma.sponsor.update({
      where: {
        id,
      },
      data: validatedFields.data,
    });

    return { message: 'Sponsor updated successfully!' };
  } catch (e) {
    console.error(e);
    return { message: 'Failed to update Sponsor.' };
  }
}

export const deleteSponsor = async (id: string): Promise<State> => {
  verifyAndRedirect();

  try {
    await prisma.sponsor.delete({
      where: {
        id,
      },
    });

    return { message: 'Sponsor deleted successfully!' };
  } catch (e) {
    console.error(e);
    return { message: 'Failed to delete Sponsor.' };
  }
}
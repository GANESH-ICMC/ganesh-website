import prisma from '@/services/prisma';
import { Post, PostForm } from '@/models/post';
import { Author } from '@/models/author';

export const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const data = await prisma.author.findMany({}) as Author[];

    return data.map((author) => ({
      ...author,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

const ITEMS_PER_PAGE = 5;
export const fetchPostsPages = async (): Promise<number> => {
  try {
    const count = await prisma.post.count();

    return Math.ceil(count / ITEMS_PER_PAGE);
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch total number of posts.');
  }
}

export const fetchPosts = async (page: number, type?: PostForm['type']): Promise<Post[]> => {
  try {
    const data = await prisma.post.findMany({
      where: type ? { type } : undefined,
      orderBy: {
        createdAt: 'desc',
      },
      skip: (page - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
      select: {
        id: true,
        title: true,
        summary: true,
        type: true,
        createdAt: true,
        published: true,
        author: {
          select: {
            github: true,
          }
        }
      }
    });

    if (!data) {
      return [];
    }

    const posts: Post[] = data.map((post) => ({
      id: post.id,
      title: post.title,
      summary: post.summary ?? undefined,
      type: post.type as PostForm['type'], 
      createdAt: new Date(post.createdAt),
      published: post.published,
      authorGithub: post.author.github, 
    }));
    
    return posts;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const fetchPostById = async (id: string): Promise<PostForm | null> => {
  try {
    const data = await prisma.post.findUnique({
      where: { id },
      select: {
        title: true,
        summary: true,
        content: true,
        images: true,
        createdAt: true,
        type: true,
        published: true,
        author: {
          select: {
            github: true,
          }
        }
      }
    });

    if (!data) {
      return null;
    }

    // Transform the images property if necessary
    const postForm: PostForm = {
      id: id,
      title: data.title,
      summary: data.summary ?? undefined,
      content: data.content,
      images: data.images,
      createdAt: new Date(data.createdAt),
      type: data.type as PostForm['type'], 
      published: data.published,
      authorGithub: data.author.github,
    };

    return postForm;
  } catch (e) {
    console.error(e);
    return null;
  }
}
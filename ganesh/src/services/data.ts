import prisma from '@/services/prisma';
import { Post, PostForm } from '@/models/post';
import { Author } from '@/models/author';

const ITEMS_PER_PAGE = 5;

export const fetchAuthorsPages = async (): Promise<number> => {
  try {
    const count = await prisma.author.count();

    return Math.ceil(count / ITEMS_PER_PAGE);
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch total number of authors.');
  }
}

export const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const data = await prisma.author.findMany({});

    const authors: Author[] = data.map((author) => ({
      id: author.id,
      github: author.github,
      name: author.name ?? undefined,
      avatar: author.avatar ?? undefined,
    }));

    return authors;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const fetchAuthorsByPage = async (page: number): Promise<Author[]> => {
  try {
    const data = await prisma.author.findMany({
      skip: (page - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
      include: {
        posts: true,
      }
    });

    const authors: Author[] = data.map((author) => ({
      id: author.id,
      github: author.github,
      name: author.name ?? undefined,
      avatar: author.avatar ?? undefined,
      postCount: author.posts.length,
    }));

    return authors;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const fetchAuthorById = async (id: string): Promise<Author | null> => {
  try {
    const data = await prisma.author.findUnique({
      where: { id }
    });

    if (!data) {
      return null;
    }

    const author: Author = {
      id: data.id,
      github: data.github,
      name: data.name ?? undefined,
      avatar: data.avatar ?? undefined,
    };

    return author;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const fetchPostsPages = async (type?: PostForm['type']): Promise<number> => {
  try {
    const count = await prisma.post.count(
      type ? { where: { type } } : undefined
    );

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
            name: true,
            avatar: true,
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
      authorName: data.author.name ?? 'Anônimo',
      authorAvatar: data.author.avatar ?? undefined,
    };

    return postForm;
  } catch (e) {
    console.error(e);
    return null;
  }
}
import Form from '@/components/posts/edit-form';
import Breadcrumbs from '@/components/breadcrumbs';
import { fetchAuthors, fetchPostById } from '@/services/data';
import { notFound } from 'next/navigation';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [post, authors] = await Promise.all([
    fetchPostById(id),
    fetchAuthors(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Posts', href: '/dashboard/posts' },
          {
            label: 'Edit Post',
            href: `/dashboard/posts/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form post={post} authors={authors} />
    </main>
  );
}
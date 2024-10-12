import Breadcrumbs from '@/components/posts/breadcrumbs';
import Form from '@/components/posts/create-form';
import { fetchAuthors } from '@/services/data';
 
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const authors = await fetchAuthors();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Posts', href: '/dashboard/posts' },
          {
            label: 'Create Post',
            href: '/dashboard/posts/create',
            active: true,
          },
        ]}
      />
      <Form authors={authors} />
    </main>
  );
}
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteAuthor } from '@/services/author';

export function UpdateAuthor({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/authors/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteAuthor({ id }: { id: string }) {
  const deleteAuthorWithId = deleteAuthor.bind(null, id);
  return (
    <>
      <form action={deleteAuthorWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}

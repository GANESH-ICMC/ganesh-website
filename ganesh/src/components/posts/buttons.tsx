"use client"

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deletePost } from '@/services/post';
import Modal from '@/components/modal';
import { useState } from 'react';

export function CreatePost() {
  return (
    <Link
      href="/admin/dashboard/posts/create"
      className="flex h-10 items-center rounded-lg bg-green-600 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      <span className="hidden md:block">Create Post</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdatePost({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/dashboard/posts/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ id }: { id: string }) {
  const deletePostWithId = deletePost.bind(null, id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <Modal onRequestClose={() => setIsModalOpen(false)}>
          <div className="p-4">
            <h2 className="text-lg font-bold">Você tem certeza de que quer deletar o post?</h2>
            <div className="flex justify-around mt-4">
              <form action={deletePostWithId}>
                <button className="rounded-md border p-2 bg-red-600 text-white hover:bg-red-700 ">Deletar</button>
              </form>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-md border p-2 hover:bg-gray-100">
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      )}
      <button onClick={() => setIsModalOpen(true)} className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}

"use client";

import Modal from '@/components/modal';
import { useActionState } from '@/lib/utils';
import { createSponsor, State } from '@/services/sponsor';
import { useState } from 'react';

export const CreateSponsor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createSponsor, initialState);
  return (
    <>
      {isModalOpen && (
        <Modal
          onRequestClose={() => { setIsModalOpen(false) }}>
          <form action={formAction}>
            <div className="p-4">
              <h2 className="text-lg font-bold text-black">Adicionar um patrocinador</h2>
              <div className="mt-4">
                <label htmlFor="name" className="text-sm font-medium text-black">Nome do patrocinador</label>
                <input type="text" name="name" id="name" className="w-full p-2 border border-gray-400 rounded-md" />
              </div>
              <div className="mt-4">
                <label htmlFor="link" className="text-sm font-medium text-black">Link</label>
                <input type="text" name="link" id="link" className="w-full p-2 border border-gray-400 rounded-md" />
              </div>
              <div className="mt-4">
                <label htmlFor="logo" className="text-sm font-medium text-black">Logo</label>
                <input type="text" name="logo" id="logo" className="w-full p-2 border border-gray-400 rounded-md" />
              </div>
              <div className="mt-4">
                <label htmlFor="description" className="text-sm font-medium text-black">Descrição [opcional]</label>
                <textarea rows={2} name="description" id="description" className="w-full p-2 border border-gray-400 rounded-md" />
              </div>
              <div className="flex justify-around mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-md border p-2 border-gray-400 hover:border-white hover:bg-adminForeground text-gray-400 hover:text-white">
                  Cancel
                </button>
                <button className="rounded-md border p-2 bg-green-600 text-white hover:bg-green-700">Create</button>
              </div>
            </div>
          </form>
        </Modal>
      )}

      <button
        onClick={() => setIsModalOpen(true)}
        className='text-white text-3xl rounded-md text-mono w-48 h-48 bg-adminBackground border-[2px] border-background hover:bg-adminForeground hover:border-white'>
        +
      </button>
    </>
  )
}
"use client"

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useState } from 'react';

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }
  
  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }
  
  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Action<State, FormData> = (state: State, formData: FormData) => Promise<State> | State;
export function useActionState<State, FormData>(action: Action<State, FormData>, initialState: State) {
  const [state, setState] = useState<State>(initialState);
  
  const formAction = async (formData: FormData) => {
    const newState = await action(state, formData);
    setState(newState);
  };

  return [state, formAction] as [State, (formData: FormData) => Promise<void>];
}
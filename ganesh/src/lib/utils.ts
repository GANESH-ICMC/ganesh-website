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

export function formatDate(date: Date) {
  const dateToCompare = new Date(date.getTime() + new Date().getTimezoneOffset() * 60000);

  const now = new Date();
  const diff = now.getTime() - dateToCompare.getTime();

  if (diff < 1000 * 60 * 60) {
    const minutes = Math.round(diff / (1000 * 60));
    if (minutes === 0) return 'Agora';
    else if (minutes === 1) return '1 minuto atrás';
    return `${minutes} minutos atrás`;
  } else if (diff < 1000 * 60 * 60 * 24) {
    const hours = Math.round(diff / (1000 * 60 * 60));
    if (hours === 1) return '1 hora atrás';
    return `${Math.round(diff / (1000 * 60 * 60))} horas atrás`;
  } else if (diff < 1000 * 60 * 60 * 24 * 7) {
    const days = Math.round(diff / (1000 * 60 * 60 * 24));
    if (days === 1) return '1 dia atrás';
    return `${Math.round(diff / (1000 * 60 * 60 * 24))} dias atrás`;
  }
  
  return dateToCompare.toLocaleDateString('pt-BR');
}
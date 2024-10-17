import Pagination from '@/components/pagination';
import Table from '@/components/authors/table';
import { Suspense } from 'react';
import { fetchAuthorsPages } from '@/services/data';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Posts',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchAuthorsPages();

  return (
    <div className="w-full md:mb-16">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Authors</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." /> */}
      </div>
       <Suspense key={currentPage} fallback={<div />}>
        <Table currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
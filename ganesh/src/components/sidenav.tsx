import Link from 'next/link';
import NavLinks from './nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { signOut } from '../auth';

export const experimental_ppr = true;

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-adminForeground p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <Image
            src="/images/logo/ganesh-logo-coloured.png"
            height={60}
            width={60}
            alt="Ganesh Logo" />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-adminBackground md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-adminForeground p-3 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  HandThumbUpIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/br/admin/dashboard', icon: HomeIcon },
  { name: 'Content', href: '/br/admin/dashboard/posts', icon: DocumentDuplicateIcon },
  { name: 'Videos', href: '/br/admin/dashboard/videos', icon: PlayIcon },
  { name: 'Authors', href: '/br/admin/dashboard/authors', icon: UserGroupIcon },
  { name: 'Sponsors', href: '/br/admin/dashboard/sponsors', icon: HandThumbUpIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-adminBackground text-gray-400 p-3 text-sm font-medium hover:bg-adminForeground hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-adminForeground text-primary': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden xl:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

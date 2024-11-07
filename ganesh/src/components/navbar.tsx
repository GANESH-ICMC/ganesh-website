"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Content', href: '/content' },
  { name: 'News', href: '/news' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes('/admin') && (<>
        <nav className="backdrop-blur fixed w-screen h-20 bg-background bg-opacity-45 transition duration-200 ease-in-out hover:bg-opacity-75 text-white font-mono flex items-center justify-center z-10">
          <div className="w-full max-w-screen-lg flex items-center justify-between">
            <div className="group relative">
              <Link href="/" className={clsx("nav-link", {
                'active-nav-link': pathname === '/',
              })}>
                <Image
                  className='w-32 py-2'
                  src="/images/logo/ganesh-logo-white.svg"
                  height={3.3}
                  width={20}
                  alt="Ganesh Logo" />
              </Link>
            </div>

            <div className="flex justify-around w-1/3">
              <div className="group relative">
                <Link href="/about" className={clsx("nav-link", {
                  'active-nav-link': pathname.startsWith('/about'),
                })}>
                  About Us
                </Link>

                {/* Flyout menu */}
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible transition-all duration-250 ease-in-out group-hover:opacity-100 group-hover:visible transform">
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-200">
                    Core Values
                  </Link>
                  <Link href="/about/institute" className="block px-4 py-2 hover:bg-gray-200">
                    Our Institute
                  </Link>
                  <Link href="/about/university" className="block px-4 py-2 hover:bg-gray-200">
                    Our University
                  </Link>
                </div>
              </div>

              <div className="group relative">
                <Link href="/content" className={clsx("nav-link", {
                  'active-nav-link': pathname.startsWith('/content'),
                })}>
                  Content
                </Link>

                {/* Flyout menu */}
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible transition-all duration-250 ease-in-out group-hover:opacity-100 group-hover:visible transform">
                  <Link href="/content/article" className="block px-4 py-2 hover:bg-gray-200">
                    Articles
                  </Link>
                  <Link href="/content/activity" className="block px-4 py-2 hover:bg-gray-200">
                    Activities
                  </Link>
                  <Link href="/content/video" className="block px-4 py-2 hover:bg-gray-200">
                    Videos
                  </Link>
                  <Link href="/content/tip" className="block px-4 py-2 hover:bg-gray-200">
                    Tips :)
                  </Link>
                </div>
              </div>

              <div className="group relative">
                <Link href="/news" className={clsx("nav-link", {
                  'active-nav-link': pathname.startsWith('/news'),
                })}>
                  News
                </Link>
              </div>

              <div className="group relative">
                <Link href="/sponsors" className={clsx("nav-link", {
                  'active-nav-link': pathname.startsWith('/sponsor'),
                })}>
                  Sponsors
                </Link>
              </div>
            </div>

            <div className="group relative">
              <Link href="/content" className="nav-link">
                Pt-br
              </Link>

              {/* Flyout menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible transition-all duration-250 ease-in-out group-hover:opacity-100 group-hover:visible transform">
                <Link href="/content/article" className="block px-4 py-2 hover:bg-gray-200">
                  Pt-br
                </Link>
                <Link href="/content/activity" className="block px-4 py-2 hover:bg-gray-200">
                  En
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>)}
    </>
  )
}

"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from "react";
import { MenuToggle } from "./button/menu-toggle";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Content', href: '/content' },
  { name: 'News', href: '/news' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  // Animation for desktop flyout menus
  const flyoutVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      {!pathname.includes("/admin") && (
        <>
          <nav className="backdrop-blur fixed w-screen h-20 bg-background bg-opacity-45 transition duration-200 ease-in-out hover:bg-opacity-75 text-white font-mono flex items-center justify-center z-10">
            <div className="w-full max-w-screen-lg flex items-center justify-between px-4">
              <div className="group relative">
                <Link
                  href="/"
                  className={clsx("nav-link", {
                    "active-nav-link": pathname === "/",
                  })}
                >
                  <Image
                    className="w-40 py-2"
                    src="/images/logo/ganesh-logo-white.svg"
                    height={33}
                    width={200}
                    alt="Ganesh Logo"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex w-3/5 lg:w-1/2 flex-row justify-between items-center gap-20">
                {/* Desktop links and flyout menus here */}

                <div className="hidden md:flex flex-row justify-around w-full gap-5">
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
                      <Link href="/content/tip" className="block px-4 py-2 hover:bg-gray-200">
                        Tips :)
                      </Link>
                      <Link href="/content/video" className="block px-4 py-2 hover:bg-gray-200">
                        Videos
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
                </div>

                <div className="group md:relative w-1/3">
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

              {/* Mobile Menu Toggle */}
              <MenuToggle
                toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                isOpen={mobileMenuOpen}
              />
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                key="mobileMenu"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed top-20 left-0 w-full bg-background bg-opacity-95 text-white font-mono z-10"
              >
                <div className="flex flex-col space-y-4 p-4">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx("block nav-link", {
                        "active-nav-link": pathname === link.href,
                      })}
                    >
                      {link.name}
                    </Link>
                  ))}
                  {/* Language Toggle Option */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

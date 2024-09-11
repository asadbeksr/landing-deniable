'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';

type Link = {
  name: string;
  href: string;
};

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Press',
    href: '/press',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];

export default function MobileMenu({currentPage}: {currentPage: string}) {
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    if (currentPage !== undefined && currentPage !== null) {
      setMobileNavOpen(false);
    }
  }, [currentPage]);
  return (
    <div className='md:hidden flex items-center'>
      <button
        ref={trigger}
        className='z-30 p-4 flex items-center justify-center'
        aria-controls='mobile-nav'
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className='sr-only'>Menu</span>
        <span
          className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out rounded-full ${
            mobileNavOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
          }`}
        ></span>
        <span
          className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out rounded-full  ${
            mobileNavOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out rounded-full  ${
            mobileNavOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
          }`}
        ></span>
      </button>

      <nav
        id='mobile-nav'
        ref={mobileNav}
        className={`absolute left-0 right-0 top-0 ${
          mobileNavOpen ? 'no-doc-scroll overscroll-none' : ''
        } z-20 left-0 w-full px-6 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out max-h-[100vh] h-[100vh] bg-card`}
        style={mobileNavOpen ? { opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className='rounded-lg pt-28 uppercase text-xl flex  flex-col gap-10'>
          {links.map((linkItem) => (
            <li key={linkItem.href}>
              <Link
                className={`text-xl ${currentPage === linkItem.href ? 'text-hover' : ''}`}
                href={linkItem.href}
              >
                {linkItem.name}
              </Link>
            </li>
          ))}
        </ul>

        <hr className='h-[1px] border-white/25 mt-10' />

        <Button
          size='lg'
          asChild
          variant='outline'
          className='w-full mt-10 h-12 bg-inherit uppercase'
        >
          <Link href='/signin'>Sign in</Link>
        </Button>

        <Button
          size='lg'
          asChild
          className='text-sm w-full mt-10 h-12 uppercase'
        >
          <Link href='/request-demo'>Request a demo</Link>
        </Button>
      </nav>
    </div>
  );
}

'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Press', href: '/press' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='w-full absolute md:static'>
      <div className='max-w-5xl container mx-auto px-6 lg:px-0'>
        <div className='flex items-center justify-between h-20 md:h-28'>
          <div className='flex-1 items-center justify-center mt-2 z-30'>
            <Logo />
          </div>

          <nav className='hidden md:flex'>
            <ul className='flex grow justify-center flex-wrap items-center'>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={cn(
                      'font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out',
                      pathname === link.href && 'text-hover'
                    )}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='flex-1 flex justify-end items-center uppercase gap-4 ml-4'>
              <Button asChild size='sm' className='text-sm'>
                <Link href='/request-demo'>Request a demo</Link>
              </Button>

              <Button asChild size='sm' variant='outline'>
                <Link href='/signin'>Sign in</Link>
              </Button>
            </div>
          </nav>

          <MobileMenu currentPage={pathname} />
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from './logo';
import Image from 'next/image';

const aboutLinks = [
  { name: 'Contact Us', href: '/contact' },
  { name: 'Press', href: '/press' },
  { name: 'FAQ', href: '/faq' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Use', href: '/terms-of-use' },
  { name: 'For Investors', href: '/investors' },
];

export default function Footer() {
  return (
    <footer>
      <div className='bg-muted border-t-2'>
        <div className='px-6 lg:px-0 max-w-5xl mx-auto grid sm:grid-cols-12 gap-6 md:gap-8 py-8 md:py-10'>
          <div className='sm:col-span-12 lg:col-span-4'>
            <div className='h-full flex flex-col sm:flex-row lg:flex-col justify-between'>
              <Logo />
            </div>
          </div>

          <div className='sm:col-span-4 lg:col-span-2'>
            <h6 className='text-sm font-bold mb-4 uppercase text-primary'>
              About us
            </h6>
            <ul className='text-sm space-y-6'>
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='sm:col-span-4 lg:col-span-2'>
            <h6 className='text-sm font-bold mb-4 uppercase text-primary'>
              Legal
            </h6>
            <ul className='text-sm space-y-6'>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='sm:col-span-4 lg:col-start-9 lg:col-end-13 flex justify-start lg:justify-end'>
            <Button asChild className='text-sm uppercase w-full sm:w-auto'>
              <Link href='/request-demo'>Request a demo</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className='bg-[#181A26] border-t-2'>
        <div className='px-6 lg:px-0 py-8 md:py-6 max-w-5xl flex lg:mx-auto justify-between items-center gap-8'>
          <p className='text-sm'>
            © 2024 Deniable.
            <br className='inline sm:hidden' /> All Rights reserved
          </p>

          <Image
            src='/images/karakoram.svg'
            width={150}
            height={40}
            alt='karakoram-logo'
          />
        </div>
      </div>
    </footer>
  );
}

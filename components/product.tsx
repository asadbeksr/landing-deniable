import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export function Product() {
  return (
    <section className='max-w-5xl mx-auto px-6 lg:px-0 my-16 md:my-24'>
      <div className='flex h-full flex-col-reverse md:flex-row w-full relative justify-center gap-16'>
        <div className='lg:w-[1125px]'>
          <h2 className='font-bebas text-6xl'>
            Google Pixel 6a{' '}
            <span className='hidden lg:inline'>
              <br />
            </span>{' '}
            with Deniable OS
          </h2>

          <span className='text-[#cbd5e0] '>includes 12 month license</span>

          <ul className='my-8 text-[#cbd5e0] '>
            <li>12 MP Camera</li>
            <li> SIM Unlocked </li>
            <li>128GB Storage</li>
            <li>SD Card Slot</li>
          </ul>

          <span className='font-bebas text-6xl p-4 bg-[#8d1dac]/25 w-[100vw] absolute '>
            $999
          </span>

          <p className='mt-[6.2rem] py-2 mb-8 text-white/60 md:w-[600px] absolute'>
            License only options available soon for $50 per month - {''}
            <Link href='/contact' className='underline'>
              contact us{' '}
            </Link>{' '}
            &nbsp; for more details
          </p>
        </div>

        <div className='z-10 lg:absolute lg:-top-5 md:max-w-[420px] lg:right-0'>
          <Image
            src='/images/Pixel.svg'
            alt='Google Pixel 6a'
            width={880}
            height={840}
          />
        </div>
      </div>

      <Button
        size='lg'
        className='w-full sm:w-auto bg-primary md:py-7 rounded-md uppercase tracking-wide mt-[11rem]'
      >
        Request a demo
      </Button>
    </section>
  );
}

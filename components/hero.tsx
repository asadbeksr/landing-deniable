import React from 'react';
import { Vortex } from './ui/vortex';
import { Button } from './ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className='w-full mx-auto rounded-md overflow-hidden'>
      <Vortex
        backgroundColor='transparent'
        className='flex flex-col px-6 xl:px-[10rem] lg:px-32 py-12 w-full h-full mt-8'
      >
        <div className='mx-auto flex flex-col'>
          <h1 className='text-secondary text-7xl lg:text-8xl sm:mt-10 lg:-ml-10 font-bebas'>
            bullet proof encryption
          </h1>

          <h2 className=' text-7xl lg:text-8xl font-bebas -mt-4'>
            bully proof device
          </h2>

          <p className='uppercase mt-4 md:mt-8 text-base lg:text-xl md:tracking-wide'>
            protecting your data against digital intrusion  <span className='hidden md:inline'><br /></span> and  your people from
            physical coercion
          </p>

          <div className='flex items-center mt-6 md:mt-14 gap-8 md:gap-12 flex-col sm:flex-row lg:justify-between w-full'>
            <Button
              size='lg'
              className='w-full sm:w-auto bg-primary  md:py-7 rounded-md uppercase tracking-wide'
            >
              Request a demo
            </Button>

            <div className='flex items-center gap-8 flex-col sm:flex-row'>
              <span className='text-secondary mx-4 uppercase mt-32 sm:mt-0'>Trusted by:</span>

              <Image
                src='/images/launch-logo.svg'
                alt='UNDP Logo'
                className='w-[160px] md:w-[120px]'
                width={120}
                height={60}
              />

              <Image
                src='/images/undp-logo.svg'
                alt='UNDP Logo'
                width={160}
                height={72}
              />
            </div>
          </div>
        </div>
      </Vortex>
    </section>
  );
}

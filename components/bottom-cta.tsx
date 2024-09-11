import { Vortex } from './ui/vortex';

export function BottomCta() {
  return (
    <section className='w-full max-w-[2000px] mx-auto rounded-md py-44 md:py-52 overflow-hidden'>
      <Vortex
        backgroundColor='transparent'
        className='flex flex-col justify-center px-6 py-12 w-full h-full'
      >
        <div className='mx-auto font-bebas'>
          <h1 className='text-7xl lg:text-8xl sm:text-end'>
            Show <span className='text-secondary'>everything</span>
          </h1>

          <h2 className='text-7xl lg:text-8xl -mt-2 text-end sm:text-start'>
            Without Showing <span className='text-secondary'>Anything</span>
          </h2>
        </div>
      </Vortex>
    </section>
  );
}

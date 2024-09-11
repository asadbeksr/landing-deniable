import Image from 'next/image';

export function Testimonials() {
  return (
    <section className='grid grid-cols-16 gap-0 sm:gap-4 w-full mx-auto text-lg md:tracking-normal mt-24 font-bebas  text-center md:text-start'>
      <div className='col-span-16 sm:col-span-9 bg-[#200B2B] p-6 lg:pl-[14rem] 2xl:pl-[18rem]  flex flex-col md:flex-row items-center md:items-start gap-10'>
        <Image
          src='/icons/QuoteIcon.svg'
          width={40}
          height={32}
          alt='quote icon'
        />
        <div>
          <p className='text-3xl leading-9'>
            I feel safer using a Deniable phone compared to a normal one,
            because even if I get stopped, they cannot see anything
          </p>
          <span className='text-white/50'>DR, journalist, Denmark</span>
        </div>
      </div>

      <div className='col-span-16 sm:col-span-7 bg-[#340F42]  p-6 lg:pr-[14rem] 2xl:pr-[18rem] pl-6 pr-6 flex flex-col md:flex-row items-center md:items-start gap-10'>
        <Image
          src='/icons/QuoteIcon.svg'
          width={40}
          height={32}
          alt='quote icon'
          className='md:ml-6'
        />
        <div>
          <p className='text-3xl leading-9'>
            When I use a Deniable phone in public, no one notices that its
            different
          </p>
          <span className='text-white/50'>BS, journalist, Ukraine</span>
        </div>
      </div>

      <div className='col-span-16 sm:col-span-7 bg-[#340F42]  p-6 lg:pl-[14rem] 2xl:pl-[18rem] pl-6 pr-6 flex  flex-col md:flex-row items-center md:items-start gap-10 order-1 sm:order-none'>
        <Image
          src='/icons/QuoteIcon.svg'
          width={40}
          height={32}
          alt='quote icon'
        />
        <div>
          <p className='text-3xl leading-9'>
            We are keeping a low profile so staying invisible with Deniable is
            perfect
          </p>
          <span className='text-white/50'>KM, NGO manager, Liberia</span>
        </div>
      </div>

      <div className='col-span-16 sm:col-span-9 bg-[#200B2B] p-6 lg:pr-[14rem] 2xl:pr-[18rem] pl-6 pr-6 flex flex-col md:flex-row items-center md:items-start gap-10'>
        <Image
          src='/icons/QuoteIcon.svg'
          width={40}
          height={32}
          alt='quote icon'
          className='md:ml-6'
        />
        <div>
          <p className='text-3xl leading-9'>
            With Deniable phone, I feel confident knowing that, even if
            checked,no sensitive information will be exposed.
          </p>
          <span className='text-white/50'>
            GH, democracy activist, cambodia
          </span>
        </div>
      </div>
    </section>
  );
}

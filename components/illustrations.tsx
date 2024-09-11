import Image from 'next/image';

export function Illustrations() {
  return (
    <section className='flex flex-col md:flex-row mx-4 sm:mx-auto items-center gap-4 md:gap-[2px] mx:gap-8 my-24'>
      <Image
        src='/images/left-illustration.svg'
        alt='Illustration of a developer'
        className='w-[300px] md:w-[402px]'
        width={402}
        height={475}
      />
      <Image
        src='/images/right-illustration.svg'
        alt='Illustration of a developer'
        className='w-[300px] md:w-[400px]'
        width={400}
        height={475}
      />
    </section>
  );
}

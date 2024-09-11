import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='relative flex inset-0 '>
        <div className='relative pt-3 animate-rotate-pink'>
          <Image
            src='/images/pink-logo.svg'
            alt='Deniable-logo'
            width={54}
            height={58}
          />
        </div>

        <div className='absolute pb-3 inset-0 animate-rotate-white'>
          <Image
            src='/images/white-logo.svg'
            alt='Deniable-logo'
            width={54}
            height={58}
          />
        </div>
      </div>
    </div>
  );
}


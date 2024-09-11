import Image from 'next/image';

export function Features() {
  return (
    <section className='max-w-5xl mx-auto flex my-16 md:my-36 gap-4 flex-col md:flex-row w-full px-6 lg:px-0 uppercase font-bebas'>
      <div className='min-h-[260px] py-10 bg-card flex-col justify-start items-center gap-8 inline-flex'>
        <div className='w-10 h-10 relative'>
          <Image
            src='/icons/SearchIcon.svg'
            width={40}
            height={40}
            objectFit='contain'
            alt='search icon'
          />
        </div>
        <p className="w-62  px-8 text-center text-3xl font-bold font-['Bebas Neue'] leading-9">
          comply with search requests with complete peace of mind
        </p>
      </div>

      <div className='min-h-[260px]  py-10 bg-card flex-col justify-start items-center gap-8 inline-flex'>
        <div className='w-10 h-10 relative'>
          <Image
            src='/icons/AnnotationIcon.svg'
            width={40}
            height={40}
            objectFit='contain'
            alt='annotation icon'
          />
        </div>
        <p className="w-62  px-8 text-center text-3xl font-bold font-['Bebas Neue'] leading-9">
          secure communication tools, hidden from prying eyes
        </p>
      </div>

      <div className='min-h-[260px]  py-10 bg-card flex-col justify-start items-center gap-8 inline-flex'>
        <div className='w-10 h-10 relative'>
          <Image
            src='/icons/ShieldIcon.svg'
            width={40}
            height={40}
            objectFit='contain'
            alt='shield icon'
          />
        </div>
        <p className="w-62 px-8 text-center text-3xl font-bold font-['Bebas Neue'] leading-9">
          reduce human error with simpler security protocols
        </p>
      </div>
    </section>
  );
}

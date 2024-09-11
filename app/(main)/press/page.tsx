import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { ArrowUpRight, Search } from 'lucide-react';
import Image from 'next/image';

import '../../../app/globals.css';
import { Article } from '@/components/ui/article';

type Post = {
  date: string;
  title: string;
  content: string;
  image: string;
};

const post1: Post = {
  date: 'Mar 20, 2024 23:14',
  title: 'Quis et sit faucibus pellentesque. Facilisis felis eget a et vitae.',
  content: `Gravida sed lobortis feugiat pellentesque nisl quis in lobortis blandit. Quis a vulputate diam massa.`,
  image: '/images/press-1.png',
};

const post2: Post = {
  date: 'Apr 5, 2024 15:20',
  title: 'Lorem in metus mauris auctor. Lacus ut id mauris et consequat.',
  content: `Sit ut habitant pharetra risus scelerisque nibh sed imperdiet hendrerit. Quis et nulla nunc lectus tincidunt et urna velit in. Et sit sit ut eget sit. Fringilla eu in morbi rhoncus. Non in cras turpis ut massa a odio urna ut.`,
  image: '/images/press-3.png',
};

const post3: Post = {
  date: 'May 10, 2024 10:10',
  title:
    'Aliquet senectus pellentesque sed ac diam facilisis congue sit maecenas facilisis.',
  content: `Semper cursus rhoncus ullamcorper faucibus sed molestie. Vulputate nulla molestie non cursus sed nunc dignissim tincidunt. Morbi scelerisque congue a amet sed nec dolor. Quis mauris sagittis pulvinar odio fermentum at aliquet vulputate.`,
  image: '/images/press-2.png',
};

const postsList: Post[] = Array.from({ length: 9 }, (_, i) => {
  const posts = [post1, post2, post3];
  const shift = Math.floor(i / 3);
  return {
    ...posts[(i + shift) % 3],
    title: `${posts[(i + shift) % 3].title} ${i + 1}`,
  };
});

const firstColumn = postsList.filter((_, index) => index % 3 === 0);
const secondColumn = postsList.filter((_, index) => index % 3 === 1);
const thirdColumn = postsList.filter((_, index) => index % 3 === 2);


export default function Press() {
  return (
    <section className='max-w-5xl flex flex-col mx-auto items-center mt-28 md:mt-8 mb-16 gap-6 px-6 lg:px-0'>
      <div className='flex justify-between w-full flex-1 flex-col sm:flex-row items-start gap-8'>
        <h3 className='font-bebas text-3xl md:text-5xl text-center sm:text-start font-bold tracking-wider w-full'>
          Deniable in the news
        </h3>
        <div className='w-full sm:w-2/3 flex justify-end items-center relative'>
          <Input placeholder='Search' className='md:w-[200px] w-full pr-8' />
          <Search  className='absolute mr-2 text-gray-500 w-5 h-5' />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4'>
        <div className='grid gap-6 aspect-video '>
          {firstColumn.map((post) => (
            <Article key={post.title} post={post} />
          ))}
        </div>
        <div className='grid gap-6 aspect-square'>
          {secondColumn.map((post) => (
            <Article key={post.title} post={post} />
          ))}
        </div>
        <div className='grid gap-6 aspect-video'>
          {thirdColumn.map((post) => (
            <Article key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

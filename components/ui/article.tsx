import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Post = {
    date: string;
    title: string;
    content: string;
    image: string;
  };
type ArticleProps = {
    post: Post;
  };
  
  export function Article({ post }: ArticleProps) {
    return (
      <div>
        <div className='flex flex-col h-auto max-w-full'>
          <Image
            src={post.image}
            width={400}
            height={200}
            alt={post.title}
            className='h-auto w-full object-cover'
          />
          <div className='border-[#2d3748] border bg-[#1A202C] p-4 flex gap-2 flex-col'>
            <div className='flex items-center justify-between '>
              <span className='text-[#a0aec0] text-xl'>{post.date}</span>
              <Link href='#' >
                <ArrowUpRight className='text-hover w-[30px] h-[30px]' />
              </Link>
            </div>
            <h4 className='text-2xl font-bold font-bebas'>{post.title}</h4>
            <p className='text-[#a0aec0] text-lg '>{post.content}</p>
          </div>
        </div>
      </div>
    );
  }
  
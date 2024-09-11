import { BottomCta } from '@/components/bottom-cta';
import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { Illustrations } from '@/components/illustrations';
import { Information } from '@/components/information';
import { Product} from '@/components/product';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen pt-24 md:pt-0'>
      <Hero />
      <Illustrations />
      <Information />
      <Features />
      <Product />
      <Testimonials />
      <BottomCta />
    </main>
  );
}

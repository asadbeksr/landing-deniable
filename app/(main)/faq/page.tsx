import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const accordion = {
  trigger: "Some of the questions we're frequently asked:",
  content: `Pretium pulvinar odio urna quis nullam neque urna. Diam 
              scelerisque lorem lectus ac aliquam. Vitae est ornare dolor
              fermentum gravida rhoncus. Senectus neque risus id magna erat
              lacus augue quis nec. Ultrices nisl diam vel faucibus nisl. `,
};

const accordionList = Array.from({ length: 6 }, (_, i) => ({
  ...accordion,
  trigger: `${accordion.trigger} ${i + 1}`,
}));

export default function FAQ() {
  return (
    <section className='max-w-5xl flex flex-col mx-auto items-center mt-24 md:mt-8 mb-16 gap-6 px-6 lg:px-0'>
      <div className='flex justify-between w-full flex-1 flex-col sm:flex-row'>
        <h3 className='font-bebas text-3xl md:text-5xl font-bold tracking-wider h-28 w-full'>
          Some of the questions we're <br />
          frequently asked:
        </h3>
        <div className='w-full sm:w-2/3 flex justify-end items-center relative'>
          <Input placeholder='Search' className='md:w-[200px] w-full pr-8' />
          <Search className='absolute mr-2 text-gray-500 w-5 h-5' />
        </div>
      </div>
      <div className='w-full'>
        <Accordion
          type='single'
          collapsible
          className='grid gap-2 md:grid-cols-2'
        >
          <div className='w-full flex gap-2 flex-col'>
            {accordionList.slice(0, 3).map((item) => (
              <AccordionItem value={item.trigger} key={item.trigger}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </div>
          <div className='w-full flex gap-2 flex-col'>
            {accordionList.slice(3, 6).map((item) => (
              <AccordionItem value={item.trigger} key={item.trigger}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
}

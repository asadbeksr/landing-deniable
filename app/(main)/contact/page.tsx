import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <section className='flex flex-col items-center mt-24 md:mt-8 mb-16 gap-6 px-6 lg:px-0'>
      <h3 className='text-5xl font-bold font-bebas tracking-wider'>
        Contact Us
      </h3>
      <p className='text-center'>
        If you have any questions, feel free to contact us
      </p>

      <form className='flex flex-col gap-6 sm:w-[400px] w-full'>
        <div>
          <Label htmlFor='firstName'>Full Name</Label>
          <Input
            required
            id='firstName'
            className='w-full mt-1'
            placeholder='Please enter your full name'
            size={32}
          />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            required
            id='email'
            type='email'
            className='w-full mt-1'
            placeholder='Please enter email'
          />
        </div>
        <div>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            rows={6}
            id='message'
            required
            className='w-full mt-1 resize-none'
            placeholder='Enter your message'
          />
        </div>
        <div className='flex items-center gap-4 md:self-end w-full justify-between'>
          <Button variant='outline' className='uppercase flex-1'>
            Cancel
          </Button>
          <Button className=' uppercase flex-1'>Send</Button>
        </div>
      </form>
    </section>
  );
}

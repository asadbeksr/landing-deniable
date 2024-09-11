import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Figtree } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { TailwindIndicator } from '@/components/tailwind-indicator';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: 'Deniable.io - by Karakoram Group',
  description:
    'Protecting your data against digital intrusion and your people from physical coercion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${figtree.variable} ${bebasNeue.variable}`}>
      <body className={`${figtree.className} scroll-smooth`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
            {children}
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}

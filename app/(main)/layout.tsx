import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="grow">
        {children}
      </main>

      <Footer />
    </>
  );
}

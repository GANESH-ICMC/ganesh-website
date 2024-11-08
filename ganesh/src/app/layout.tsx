import '@/app/global.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import MatrixRainingLetters from '@/components/matrix';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Ganesh',
    default: 'Ganesh',
  },
  description: 'Information Security Group',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pt-br">
        <body className='bg-black overflow-hidden'>
          <div className='fixed h-screen w-screen bg-gradient-to-br from-transparent to-green-900 -z-10' />
          <MatrixRainingLetters key={"hallo"} />
          <main className="h-dvh w-full overflow-y-auto">
            <Navbar />
            <div className='flex flex-col'>
              {children}
              <Footer />
            </div>
          </main>
        </body>
      </html>
    </>
  );
}

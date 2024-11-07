import '@/app/global.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import MatrixRainingLetters from '@/components/matrix';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Ganesh Backend',
    default: 'Ganesh Backend',
  },
  description: 'Onde conteúdos secretos são criados.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pt-br">
        <body className='bg-black'>
          <main className="h-screen w-screen bg-gradient-to-br from-transparent to-green-900 overflow-x-hidden">
            <Navbar />
            <div className='flex flex-col min-h-screen'>
              <MatrixRainingLetters key={"hallo"} />
              {children}
              <Footer />
            </div>
          </main>
        </body>
      </html>
    </>
  );
}

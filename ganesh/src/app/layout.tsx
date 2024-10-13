import '@/app/global.css';
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
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

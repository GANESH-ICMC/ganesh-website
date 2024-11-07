import '@/app/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-adminBackground'>
      {children}
    </div>
  );
}

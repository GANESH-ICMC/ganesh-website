import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Videos',
};

export default function Page() {
  return (
    <div className="w-full md:mb-16">
      <div className="flex w-full items-center justify-between">
        <h1 className={`mx-5 text-xl md:text-2xl text-neutral-100`}>Videos</h1>
      </div>
    </div>
  )
}
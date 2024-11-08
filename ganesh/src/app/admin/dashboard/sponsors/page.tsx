import { CreateSponsor } from "@/components/sponsors/buttons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sponsors',
};

export default function Page() {

  return (
    <>
      <div className="w-full md:mb-16">
        <div className="flex w-full items-center justify-between">
          <h1 className={`mx-5 text-2xl text-neutral-100`}>Sponsors</h1>
        </div>
        <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
          <CreateSponsor />
        </div>
      </div>
    </>
  )
}

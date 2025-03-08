import { auth } from "@/auth";

export default function Page() {
  const session = auth();
  if (!session) {
    return <div>Not authenticated</div>
  }
  return (
    <div className="w-full md:mb-16">
      <div className="flex w-full items-center justify-between">
        <h1 className={`mx-5 text-xl md:text-2xl text-neutral-100`}>Dashboard</h1>
      </div>
    </div>
  )
}
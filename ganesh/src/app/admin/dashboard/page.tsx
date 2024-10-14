import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default function Page() {
  const session = auth();
  if (!session) {
    return <div>Not authenticated</div>
  }
  return (
    <div className="w-full md:mb-16">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Dashboard</h1>
      </div>
    </div>
  )
}
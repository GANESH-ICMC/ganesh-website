export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black/25 shadow-md w-3/4 p-10 rounded-md flex flex-col gap-12 items-center backdrop-blur-[6px]">
      {children}
    </div>
  )
}
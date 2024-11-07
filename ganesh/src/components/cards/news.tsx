import Image from "next/image";
import Terminal from "./terminal";

export interface NewsProps {
  image: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  onClick: () => void;
}

export default function News({ image, title, summary, author, date, onClick }: NewsProps) {
  return (
    <div className="w-11/12 flex flex-row gap-5 pb-10">
      <Image
        className="object-contain cursor-pointer"
        onClick={onClick}
        src={image}
        alt={title}
        width={300}
        height={200} />

      <div className="flex flex-col gap-3 text-neutral-50">
        <div
          onClick={onClick}
          className="cursor-pointer text-xl font-mono font-bold hover:text-terminal">
          {title}
        </div>
        <div className="text-xs font-mono">
          {summary}
        </div>
        <div className="font-mono">
          By {author} on {date}
        </div>
      </div>
    </div>
  )
}
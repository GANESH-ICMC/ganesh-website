import Image from "next/image";
import Terminal from "./terminal";
import Link from "next/link";

export interface NewsProps {
  id: string;
  image: string;
  title: string;
  summary: string | undefined;
  author: string;
  date: string;
}

export default function News({ id, image, title, summary, author, date }: NewsProps) {
  return (
    <div className="w-5/6 flex flex-row gap-10 pb-10 items-center">
      <Link
        href={`/news/${id}`}
        className="relative w-72 h-48 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          className="object-cover"
          src={image}
          alt={title}
          fill
        />
      </Link>

      <div className="flex flex-col justify-center gap-3 text-neutral-50">
        <Link
          href={`/news/${id}`}
          className="cursor-pointer text-2xl font-mono font-bold hover:text-terminal">
          {title}
        </Link>
        {summary && (
          <div className="text-base font-mono">
            {summary}
          </div>
        )}
        <div className="font-mono">
          By {author} on {date}
        </div>
      </div>
    </div>
  )
}
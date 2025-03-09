import Image from "next/image";
import Link from "next/link";

export interface ContentProps {
  id: string;
  image: string;
  title: string;
  summary: string | undefined;
  author: string;
  date: string;
  type: string;
}

export default function Content({ id, image, title, summary, author, date, type }: ContentProps) {
  return (
    <div className="w-5/6 flex flex-col lg:flex-row gap-10 items-center">
      <Link
        href={`/content/${type}/${id}`}
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
          href={`/content/${type}/${id}`}
          className="cursor-pointer text-xl md:text-2xl font-mono font-bold hover:text-terminal">
          {title}
        </Link>
        {summary && (
          <div className="text-sm md:text-base font-mono">
            {summary}
          </div>
        )}
        <div className="text-xs md:text-sm font-mono text-neutral-400">
          By {author} on {date}
        </div>
      </div>
    </div>
  )
}
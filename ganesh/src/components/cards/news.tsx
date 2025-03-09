import Image from "next/image";
import Terminal from "./terminal";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

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
    <div className="w-5/6 flex flex-col lg:flex-row gap-5 md:gap-10">
      <Link
        href={`/news/${id}`}
        className="relative w-full md:w-72 h-48 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          className="object-cover"
          src={image}
          alt={title}
          fill
        />
      </Link>

      <div className="flex flex-col justify-center gap-2 md:gap-3 text-neutral-50">
        <Link
          href={`/news/${id}`}
          className="cursor-pointer text-xl md:text-2xl font-mono font-bold hover:text-terminal">
          {title}
        </Link>
        {summary && (
          <div className="text-xs md:text-sm font-mono overflow-hidden text-ellipsis line-clamp-5">
            {summary}
          </div>
        )}
        <div className="text-sm font-mono text-neutral-400">
          By {author} on {date}
        </div>

        <Link
          href={`/news/${id}`}
          className="cursor-pointer text-sm font-mono text-light hover:text-terminal">
          Read More
          <ArrowRightCircleIcon className="w-5 h-5 inline-block ml-1" />
        </Link>
      </div>

    </div>
  )
}
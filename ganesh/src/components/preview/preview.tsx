import MarkdownEditor from "@uiw/react-markdown-editor";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/16/solid";

interface PreviewProps {
  title: string;
  authorName?: string;
  authorAvatar?: string;
  date: Date;
  txtContent: string;
}

export default function preview({ title, authorName, authorAvatar, date, txtContent }: PreviewProps) {
  return (
    <div data-color-mode="light" className="flex flex-col gap-7 w-full">
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="flex gap-5 mb-5">
        <div className="flex gap-2">
          <span className="text-gray-500">Escrito por</span>
          <span className="font-bold">{authorName}</span>
          {authorAvatar ? (
            <Image
              src={authorAvatar}
              className="rounded-full"
              width={24}
              height={24}
              alt={`${authorName}'s profile picture`}
            />
          ) : (
            <UserIcon className="w-7 h-7 mr-2 rounded-full" />
          )}
        </div>
        <p>•</p>
        <span className="text-gray-500">{formatDate(date)}</span>
      </div>
      <MarkdownEditor.Markdown source={txtContent} />
    </div>
  )
}
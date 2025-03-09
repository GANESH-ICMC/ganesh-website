"use client"

import MarkdownPreview from '@uiw/react-markdown-preview';
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

export default function Preview({ title, authorName, authorAvatar, date, txtContent }: PreviewProps) {
  return (
    <div data-color-mode="dark" className="flex flex-col gap-7 w-full">
      <h1 className="text-2xl md:text-4xl font-bold text-white">{title}</h1>
      <div className="flex flex-row items-center gap-5 mb-5">
        <div className="flex flex-row items-center gap-2">
          <span className="text-gray-500 md:block hidden">Escrito por</span>
          {authorAvatar ? (
            <Image
              src={authorAvatar}
              className="rounded-full"
              width={24}
              height={24}
              alt={`${authorName}'s profile picture`}
            />
          ) : (
            <UserIcon className="w-7 h-7 mr-2 rounded-full text-white" />
          )}
          <span className="font-bold text-white text-xs md:text-base">{authorName}</span>
        </div>
        <p className="text-gray-500">•</p>
        <span className="text-gray-500">{formatDate(date)}</span>
      </div>
      <MarkdownPreview source={txtContent} style={{ backgroundColor: 'transparent', color: 'white' }} />
    </div>
  )
}
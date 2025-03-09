import Terminal from "@/components/cards/terminal";
import Container from "@/components/container";
import { fetchPosts, fetchPostsPages, fetchVideos } from "@/services/data";
import { Post, postTypes } from "@/models/post";
import { Video } from "@/models/video";
import Slider from "@/components/slider/slider";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface ContentPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ContentPage({
  searchParams
}: ContentPageProps) {

  const [activities, articles, tips, videos]: [Post[], Post[], Post[], Video[]] = await Promise.all([
    fetchPosts(1, "atividade", true),
    fetchPosts(1, "artigo", true),
    fetchPosts(1, "dica"),
    fetchVideos(),
  ]);

  return (
    <div className="flex flex-col gap-12 items-center pt-32 pb-12">
      <Container>
        <div className="text-2xl md:text-4xl font-mono font-bold text-title md:mb-6">
          Contents
        </div>

        <div className="w-full bg-black/25 py-6 md:p-10 rounded-md flex flex-col gap-6">
          <Link href="/content/activity" className="text-xl md:text-2xl font-mono font-bold text-light text-center hover:text-terminal flex flex-row items-center justify-center">
            Activities
            <ArrowRightCircleIcon className="w-5 h-5 inline-block ml-1" />
          </Link>
          <Slider posts={activities} type="activity" />
        </div>

        <div className="w-full bg-black/25 py-6 md:p-10 rounded-md flex flex-col gap-6">
          <Link href="/content/article" className="text-xl md:text-2xl font-mono font-bold text-light text-center hover:text-terminal flex flex-row items-center justify-center">
            Articles
            <ArrowRightCircleIcon className="w-5 h-5 inline-block ml-1" />
          </Link>
          <Slider posts={articles} type="article" />
        </div>

        <div className="w-full bg-black/25 py-6 md:p-10 rounded-md flex flex-col gap-6">
          <Link href="/content/tip" className="text-xl md:text-2xl font-mono font-bold text-light text-center hover:text-terminal flex flex-row items-center justify-center">
            Tips
            <ArrowRightCircleIcon className="w-5 h-5 inline-block ml-1" />
          </Link>
          <Slider posts={tips} type="tip" />
        </div>
      </Container>
    </div>
  );
}
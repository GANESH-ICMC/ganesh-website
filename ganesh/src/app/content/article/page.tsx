import Terminal from "@/components/cards/terminal";
import Container from "@/components/container";
import { fetchPosts, fetchPostsPages } from "@/services/data";
import { Post, postTypes } from "@/models/post";
import Content from "@/components/cards/content";
import Pagination from "@/components/pagination";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({
  searchParams
}: PageProps) {
  const currSearchParams = await searchParams;
  const pageParam = currSearchParams.page;

  const currentPage = Number(pageParam) || 1;
  const [totalPages, articles]: [number, Post[]] = await Promise.all([
    fetchPostsPages("artigo"),
    fetchPosts(currentPage, "artigo", true),
  ]);

  return (
    <div>
      <div className="flex flex-col gap-12 items-center pt-32 pb-12">
        <Container>
          <div className="text-2xl md:text-4xl font-mono font-bold text-title md:mb-6">
            Articles
          </div>
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col items-center w-full gap-10">
              <Content
                id={article.id}
                title={article.title}
                summary={article.summary}
                image={article.images[0]}
                author={article.authorGithub}
                date={new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo' }).format(article.createdAt)}
                type={"article"}
              />
              {index !== articles.length - 1 && (
                <div className="w-5/6 h-[1px] bg-neutral-500 mb-5" />
              )}
            </div>
          ))}
          <div className="my-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </Container>
      </div>
    </div>
  );
}
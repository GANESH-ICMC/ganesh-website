import Terminal from "@/components/cards/terminal";
import Container from "@/components/container";
import News from "@/components/cards/news";
import { useEffect, useState } from "react";
import { fetchPosts, fetchPostsPages } from "@/services/data";
import { Post, postTypes } from "@/models/post";

const newsList = [
  {
    title: "Palestra: Engenharia Reversa em Silício",
    summary: "Palestra sobre técnicas de análise de circuitos integrados a nivel de silício. Nesta palestra foram apresentadas técnicas de engenharia reversa aplicadas a componentes eletrónicos ao nível de silício que podem ser praticadas por qualquer um que tenha interesse a comprender o funcionamento de circuitos integrados tais como transistores, portas lógicas e até mesmo processadores e memórias. Em épocas onde falhas de segurança tem sido exploradas ao nível de hardware, tais como a falha Spectre, e sua complementar Meltdown, a exploração do silicio pode fornecer informações valiosas. A palestra foi ministrada por Bruno Rafael Aricó, graduado em ciências de computação pelo IME-USP, co-fundador do grupo de Hardware Livre da universidade e coordenador do laboratório de prototipagem Estúdio Guto Requena.",
    image: "/images/thumb_revsilicio_0.jpg",
    author: "Shogo Shima",
    date: "2021-10-20",
  },
  {
    title: "Palestra: Engenharia Reversa em Silício",
    summary: "Palestra sobre técnicas de análise de circuitos integrados a nivel de silício. Nesta palestra foram apresentadas técnicas de engenharia reversa aplicadas a componentes eletrónicos ao nível de silício que podem ser praticadas por qualquer um que tenha interesse a comprender o funcionamento de circuitos integrados tais como transistores, portas lógicas e até mesmo processadores e memórias. Em épocas onde falhas de segurança tem sido exploradas ao nível de hardware, tais como a falha Spectre, e sua complementar Meltdown, a exploração do silicio pode fornecer informações valiosas. A palestra foi ministrada por Bruno Rafael Aricó, graduado em ciências de computação pelo IME-USP, co-fundador do grupo de Hardware Livre da universidade e coordenador do laboratório de prototipagem Estúdio Guto Requena.",
    image: "/images/thumb_revsilicio_0.jpg",
    author: "Shogo Shima",
    date: "2021-10-20",
  },
  {
    title: "Palestra: Engenharia Reversa em Silício",
    summary: "Palestra sobre técnicas de análise de circuitos integrados a nivel de silício. Nesta palestra foram apresentadas técnicas de engenharia reversa aplicadas a componentes eletrónicos ao nível de silício que podem ser praticadas por qualquer um que tenha interesse a comprender o funcionamento de circuitos integrados tais como transistores, portas lógicas e até mesmo processadores e memórias. Em épocas onde falhas de segurança tem sido exploradas ao nível de hardware, tais como a falha Spectre, e sua complementar Meltdown, a exploração do silicio pode fornecer informações valiosas. A palestra foi ministrada por Bruno Rafael Aricó, graduado em ciências de computação pelo IME-USP, co-fundador do grupo de Hardware Livre da universidade e coordenador do laboratório de prototipagem Estúdio Guto Requena.",
    image: "/images/thumb_revsilicio_0.jpg",
    author: "Shogo Shima",
    date: "2021-10-20",
  },
  {
    title: "Palestra: Engenharia Reversa em Silício",
    summary: "Palestra sobre técnicas de análise de circuitos integrados a nivel de silício. Nesta palestra foram apresentadas técnicas de engenharia reversa aplicadas a componentes eletrónicos ao nível de silício que podem ser praticadas por qualquer um que tenha interesse a comprender o funcionamento de circuitos integrados tais como transistores, portas lógicas e até mesmo processadores e memórias. Em épocas onde falhas de segurança tem sido exploradas ao nível de hardware, tais como a falha Spectre, e sua complementar Meltdown, a exploração do silicio pode fornecer informações valiosas. A palestra foi ministrada por Bruno Rafael Aricó, graduado em ciências de computação pelo IME-USP, co-fundador do grupo de Hardware Livre da universidade e coordenador do laboratório de prototipagem Estúdio Guto Requena.",
    image: "/images/thumb_revsilicio_0.jpg",
    author: "Shogo Shima",
    date: "2021-10-20",
  },
  {
    title: "Palestra: Engenharia Reversa em Silício",
    summary: "Palestra sobre técnicas de análise de circuitos integrados a nivel de silício. Nesta palestra foram apresentadas técnicas de engenharia reversa aplicadas a componentes eletrónicos ao nível de silício que podem ser praticadas por qualquer um que tenha interesse a comprender o funcionamento de circuitos integrados tais como transistores, portas lógicas e até mesmo processadores e memórias. Em épocas onde falhas de segurança tem sido exploradas ao nível de hardware, tais como a falha Spectre, e sua complementar Meltdown, a exploração do silicio pode fornecer informações valiosas. A palestra foi ministrada por Bruno Rafael Aricó, graduado em ciências de computação pelo IME-USP, co-fundador do grupo de Hardware Livre da universidade e coordenador do laboratório de prototipagem Estúdio Guto Requena.",
    image: "/images/thumb_revsilicio_0.jpg",
    author: "Shogo Shima",
    date: "2021-10-20",
  },
  {
    title: "Palestra: Engenharia Reversa em Silício",
    summary: "Palestra sobre técnicas de análise de circuitos integrados a nivel de silício. Nesta palestra foram apresentadas técnicas de engenharia reversa aplicadas a componentes eletrónicos ao nível de silício que podem ser praticadas por qualquer um que tenha interesse a comprender o funcionamento de circuitos integrados tais como transistores, portas lógicas e até mesmo processadores e memórias. Em épocas onde falhas de segurança tem sido exploradas ao nível de hardware, tais como a falha Spectre, e sua complementar Meltdown, a exploração do silicio pode fornecer informações valiosas. A palestra foi ministrada por Bruno Rafael Aricó, graduado em ciências de computação pelo IME-USP, co-fundador do grupo de Hardware Livre da universidade e coordenador do laboratório de prototipagem Estúdio Guto Requena.",
    image: "/images/thumb_revsilicio_0.jpg",
    author: "Shogo Shima",
    date: "2021-10-20",
  }
]

interface NewsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function NewsPage({
  searchParams
}: NewsPageProps) {
  const currSearchParams = await searchParams;
  const pageParam = currSearchParams.page;

  const currentPage = Number(pageParam) || 1;
  const [totalPages, news]: [number[], Post[]] = await Promise.all([
    Promise.all(postTypes.map((type) => fetchPostsPages(type))),
    fetchPosts(currentPage, "notícia", true),
  ]);
  const absoluteTotalPages = await fetchPostsPages();

  return (
    <div>
      <div className="flex flex-col gap-12 items-center pt-32 pb-12">
        <Container>
          <Terminal>
            <div className="text-2xl font-mono font-bold">
              News
            </div>
          </Terminal>
          {news.map((news, index) => (
            <div key={index} className="flex flex-col items-center">
              <News
                id={news.id}
                title={news.title}
                summary={news.summary}
                image={news.images[0]}
                author={news.authorGithub}
                date={new Intl.DateTimeFormat('pt-BR').format(news.createdAt)}
              />
              <div className="w-5/6 h-[1px] bg-neutral-500" />
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
}
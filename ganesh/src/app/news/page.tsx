'use client';

import Terminal from "@/components/cards/terminal";
import Container from "@/components/container";
import News, { NewsProps } from "@/components/cards/news";
import { m } from "framer-motion";

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

export default function NewsPage() {
  return (
    <main>
      <div className="flex flex-col gap-12 items-center pt-32 pb-12">
        <Container>
          <Terminal>
            <div className="text-2xl font-mono font-bold">
              News
            </div>
          </Terminal>
          {newsList.map((news, index) => (
            <div key={index} className="flex flex-col items-center">
              <News
                title={newsList[index].title}
                summary={newsList[index].summary}
                image={newsList[index].image}
                author={newsList[index].author}
                date={newsList[index].date}
                onClick={() => { }}
              />
              <div className="w-5/6 h-[1px] bg-neutral-500" />
            </div>
          ))}
        </Container>
      </div>
    </main>
  );
}
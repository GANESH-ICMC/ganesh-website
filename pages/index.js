import React from 'react';
import Link from "next/link";

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';
import ActivityCard from '../shared/components/cards/ActivityCard'


import { withTranslation } from 'react-i18next';

function Home ({ t })  {

  const lastActivity = t('activities:activitycards', { returnObjects: true})[0];

  return (
  <React.Fragment>
    <Head
      title='Ganesh - Home'
      description={t('index:description')}
    />
    <Navbar />
    <main>
      {/* Top-level Jumbotron */}
      <div className='jumbotron bg-fixed bg-cover text-center text-white h-screen shadow-md bg-center'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full p-4'>
          <img src='/static/images/logo.svg' className='w-48' alt='Ganesh logo' />
          <h2 className='text-2xl'>
            <p>{t('index:description')}</p>
          </h2>
        </div>
      </div>

      {/* First Section: About Ganesh */}
      <section className="Home__AboutUs" style={{backgroundColor: "#fff" }}>
        <div className="container mx-auto">
          <div className="flex flex-row items-center py-12 md:py-24">
            
            <div className="Home__AboutUs_Text px-8 w-1/2 md:w-2/2">
              <h1 className="text-4xl font-bold">Sobre o Ganesh</h1>
              <p className="my-2">O Ganesh é um grupo extracurricular da Universidade de São Paulo (USP), baseado em São Carlos. Temos como nossa missão adquirir e divulgar conhecimentos na área de segurança da informação para estudantes de graduação e para a comunidade geral.</p>
              <p className="my-2">Isso é realizado pelo desenvolvimento de materiais de ensino em salas de aula, cursos especializados, workshops em escolas públicas e privadas e através da elaboração de projetos.</p>

              <p className="mt-8">
                <Link href="/aboutus"><a className="btn btn-secondary btn-shadow btn-large p-2">SAIBA MAIS</a></Link>
              </p>
            </div>
            
            <div className="Home__AboutUs_MobileImage px-2">
              <img src='https://cdn.discordapp.com/attachments/837775182525366302/838531622139592717/ganesh-group.png' className='w-5/5' alt='Ganesh logo' />
            </div>

          </div>
        </div>
      </section>

      {/* Second Section: Activities */}
      <section className="Home__Activities">
        <div className="container mx-auto">
          <div className="flex flex-row-reverse items-center py-12 md:py-16">
            
            <div className="Home__Activities_Text px-8">
              <div>
                <h1 className="text-4xl font-bold">Frentes de Estudo</h1>
                <p className="my-2">Nos organizamos em 5 frentes de estudo, sendo elas: Criptografia, Engenharia Reversa, Redes, Hardware Hacking e Segurança Web. Cada uma delas desenvolve materiais tanto independentemente como em conjunto, interfaceando as diferentes áreas.</p>
                <p className="my-2">Cada frente se reúne semanalmente para desenvolver minicursos, ferramentas e materiais de estudo, que em maioria são disponibilizados publicamente no nosso Github.</p>

                <p className="mt-8 md:hidden">
                  <Link href="/frentes">
                    <a className="btn btn-secondary btn-shadow btn-large p-2">VER FRENTES</a>
                  </Link>
                </p>
              </div>
              
              <div className="mt-4">
                <h1 className="text-4xl font-bold">Outras Atividades</h1>
                <p className="my-2">O grupo constantemente estuda e desenvolve técnicas e materiais referentes à área de Segurança da Informação. Um dos nossos objetivos é desenvolver projetos e atividades que interagem com o público externo, como o nosso canal do YouTube, o processo anual de ingresso e participações em competições da área de Segurança da Informação - Capture The Flag (CTF).</p>
                <p className="my-2">Frequentemente obtemos boas classificações nas competições que participamos e somos considerados um dos melhores times do Brasil, além do melhor time universitário do país.</p>

                <p className="mt-8">
                  <Link href="/frentes">
                    <a className="hidden md:inline-block btn btn-secondary btn-shadow btn-large p-2 mr-8">VER FRENTES</a>
                  </Link>

                  <Link href="/atividades">
                    <a className="btn btn-secondary btn-shadow btn-large p-2">VER ATIVIDADES</a>
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="Home__Activities_Card px-8">
              {/* Last Activity Card */}
              <ActivityCard 
                title={lastActivity.title} 
                date={lastActivity.date}
                description={lastActivity.description.substr(0, lastActivity.description.indexOf(" ", 100)) + '...'}
                imagesrc={lastActivity.imagesrc}
                link={lastActivity.link}
                />
            </div>

          </div>
        </div>
      </section>

      {/* Third Section: Gitbook & Material*/}
      <section className="Home__Material" style={{backgroundColor: "#102441" }}>
        <div className="container mx-auto">
          <div className="flex flex-row items-center py-8 px-6">
              
              <h2 className="text-2xl text-white font-bold flex-grow px-2">Conheça nosso material de estudos para iniciantes em Segurança da Informação!</h2>
              <a href="https://gitbook.ganeshicmc.com/" target="_blank" className="btn btn-secondary p-2">VER GITBOOK</a>
              
          </div>
        </div>
      </section>

      <style jsx>{`
        .jumbotron {
          background-image: url(/static/images/bgfull.jpg);
        }
      `}</style>
    </main>
    <Footer
      title="Ganesh - Home"
      description='Extracurricular group focused on information security.'
    />
  </React.Fragment>
);

}

export default withTranslation()(Home);

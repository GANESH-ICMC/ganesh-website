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
              <p className="my-2">Isso é realizado pelo desenvolvimento de materiais de ensino em salas de aula, cursos especializados, workshops em escolas públicas e privadas e acompanhando o desenvolvimento de projetos.</p>

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
              <h1 className="text-4xl font-bold">Frentes e Atividades</h1>
              <p className="my-2">Recusou internalizar as diversidades dos indivíduos silenciados por seus lugares de dores infligindo sentimentos de dor na alma dos menos privilegiados. Abusou psicologicamente da mulher fenotipicamente negra ressignificando a conversa com inverdades.</p>
              <p className="my-2">Incentivou a erradicação da mulher branca socialmente privilegiada, em detrimento da pauta antirracial com o intuito egoístico que transcendem a normalidade dos fatos.</p>
            </div>
            
            <div className="Home__Activities_Card px-8">
              {/* Last Activity Card */}
              <ActivityCard 
                title={lastActivity.title} 
                date={lastActivity.date}
                description=""
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

      

      {/* <section>
        <div className='container mx-auto flex flex-col items-center text-center py-4'>
          <h1 className='text-4xl font-bold py-8 md:py-16 px-4'>
            {t('index:extragroup')}
          </h1>
          <div className='flex flex-row flex-wrap justify-center pb-8 md:pb-16'>
            <div className='flex flex-column flex-wrap flex-auto w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  {t('index:mission')}
                </p>
                <button className='btn-primary w-full text-lg font-bold mt-4 md:mt-8'>
                <a href="/atividades">{t('index:activities')}</a>
                </button>
              </div>
            </div>
            <div className='flex flex-column flex-wrap flex-auto w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  {t('index:based')}
                </p>
                <button className='btn-primary w-full text-lg font-bold mt-4 md:mt-8'>
                  <a href="https://github.com/ganesh-icmc">Github</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}



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

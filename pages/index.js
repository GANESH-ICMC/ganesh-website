import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar';
import Footer from '../shared/components/footer';

const Home = () => (
  <React.Fragment>
    <Head
      title='Ganesh - Início'
      description='Grupo de extensão focado em segurança da informação.'
    />
    <Navbar />
    <main>
      <div className='jumbotron bg-fixed bg-cover text-center text-white h-screen shadow-md bg-center'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full p-4'>
          <img src='../static/logo.svg' className='w-48' alt='Ganesh logo' />
          <h2 className='text-2xl'>
            Grupo de segurança focado em segurança da informação.
          </h2>
        </div>
      </div>
      <section>
        <div className='container h-full mx-auto flex flex-col items-center text-center py-4'>
          <h1 className='text-4xl font-bold py-8 md:py-16 px-4'>
            Grupo de extensão
          </h1>
          <div className='flex flex-row flex-wrap justify-center pb-8 md:pb-16'>
            <div className='w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p>
                  Temos como missão conhecimento na área de segurança em
                  computação e difundir esse conhecimento para alunos de
                  graduação e para a comunidade em geral por meio do
                  desenvolvimento de material didático, cursos específicos,
                  palestras em escolas públicas e privadas e apoio no
                  desenvolvimento de projetos.
                </p>
                <button className='btn-primary w-full text-lg font-bold mt-4 md:mt-8'>
                  Atividades
                </button>
              </div>
            </div>
            <div className='w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p>
                  Temos como missão conhecimento na área de segurança em
                  computação e difundir esse conhecimento para alunos de
                  graduação e para a comunidade em geral por meio do
                  desenvolvimento de material didático, cursos específicos,
                  palestras em escolas públicas e privadas e apoio no
                  desenvolvimento de projetos.
                </p>
                <button className='btn-primary w-full text-lg font-bold mt-4 md:mt-8'>
                  Pesquisas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .jumbotron {
          background-image: url(../static/bgfull.jpg);
        }
      `}</style>
    </main>
    <Footer
      title="Ganesh - Início"
      description="Grupo de extensão focado em segurança da informação."
    />
  </React.Fragment>
);

export default Home;

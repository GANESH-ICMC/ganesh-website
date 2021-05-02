import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

import { withTranslation } from 'react-i18next';

function Home ({ t })  {

  //const { t, i18n } = useTranslation();

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
          <div className="flex flex-row items-center py-8">
            
            <div className="Home__AboutUs_Text px-8 w-3/5">
              <h1 className="text-4xl font-bold">Sobre o Ganesh</h1>
              <p className="my-2">Recusou internalizar as diversidades dos indivíduos silenciados por seus lugares de dores infligindo sentimentos de dor na alma dos menos privilegiados. Abusou psicologicamente da mulher fenotipicamente negra ressignificando a conversa com inverdades.</p>
              <p className="my-2">Incentivou a erradicação da mulher branca socialmente privilegiada, em detrimento da pauta antirracial com o intuito egoístico que transcendem a normalidade dos fatos.</p>
            </div>

            <div className="Home__AboutUs_Image px-8 w-2/5">
              <img src='/static/images/logo.svg' className='w-48' alt='Ganesh logo' />
            </div>

          </div>
        </div>
      </section>

      {/* Second Section: Activities */}
      <section className="Home__Activities">
        <div className="container mx-auto">
          <div className="flex flex-row items-center py-8">
            
            <div className="Home__Activities_Image px-8 w-2/5">
              {/* Last Activity Card */}
              <div className="bg-white rounded-lg shadow-lg w-full p-4">
                <h4>Última Atualização</h4>
                <p>Lorem Ipsum Dolor Sit amet velar tamen</p>
              </div>
            </div>

            <div className="Home__Activities_Text px-8 w-3/5">
              <h1 className="text-4xl font-bold">Frentes e Atividades</h1>
              <p className="my-2">Recusou internalizar as diversidades dos indivíduos silenciados por seus lugares de dores infligindo sentimentos de dor na alma dos menos privilegiados. Abusou psicologicamente da mulher fenotipicamente negra ressignificando a conversa com inverdades.</p>
              <p className="my-2">Incentivou a erradicação da mulher branca socialmente privilegiada, em detrimento da pauta antirracial com o intuito egoístico que transcendem a normalidade dos fatos.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Third Section: Gitbook & Material*/}
      <section className="Home__Material" style={{backgroundColor: "#001e47" }}>
        <div className="container mx-auto">
          <div className="flex flex-row items-center py-8">
              
              <div className="Home__Material_Text px-8 w-4/5">
                <h2 className="text-2xl text-white font-bold">Conheça nosso material de estudos para iniciantes!</h2>
              </div>

              <div className="Home__Material_Button px-8 w-1/5">
                <a href="#" className="btn btn-secondary p-2">GITBOOK</a>
              </div>

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

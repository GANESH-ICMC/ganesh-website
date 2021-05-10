import React from 'react';
import Link from "next/link";

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';
import ActivityCard from '../shared/components/cards/ActivityCard'

import { Trans, withTranslation } from 'react-i18next';

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
              <h1 className="text-4xl font-bold"><Trans i18nKey="index:sobre">About Ganesh</Trans></h1>
              <p className="my-2"><Trans i18nKey="index:sobre1">Ganesh is an extracurricular group from University of São Paulo (USP), at São Carlos city. Our mission is to adquire and spread knowledge about information security for undergraduate students and for the general comunity.</Trans></p>
              <p className="my-2"><Trans i18nKey="index:sobre2">This is accomplished through the development of teaching material in classrooms, specialized courses, workshops in public and private schools and through elaboration of projects.</Trans></p>

              <p className="mt-8">
                <Link href="/aboutus"><a className="btn btn-secondary btn-shadow btn-large p-2"><Trans i18nKey="index:saibamais">LEARN MORE</Trans></a></Link>
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
                <h1 className="text-4xl font-bold"><Trans i18nKey="index:frentes">Areas of Study</Trans></h1>
                <p className="my-2"><Trans i18nKey="index:frentes1">We organize ourselves in 5 areas of study, them being: Criptografy, Reverse Engineering, Networks, Hardware Hacking and Web Security. Each one develops materials both by themselves and with anoter, interfacing different areas.</Trans></p>
                <p className="my-2"><Trans i18nKey="index:frentes2">Every area has a weekly reunion to develop minicourses, tools and study materials, of which most are publicaly available at our Github.</Trans></p>

                <p className="mt-8 md:hidden">
                  <Link href="/frentes">
                    <a className="btn btn-secondary btn-shadow btn-large p-2"><Trans i18nKey="index:verfrentes">VIEW AREAS</Trans></a>
                  </Link>
                </p>
              </div>
              
              <div className="mt-4">
                <h1 className="text-4xl font-bold"><Trans i18nKey="index:outrasatividades">Other Activities</Trans></h1>
                <p className="my-2"><Trans i18nKey="index:outrasatividades1">The group constantly studies and develops techniques and materials about the Information Security area. One of our objectives is to develop projects and activites that interact with the external public, like our YouTube channel, the anual entrance process and participation in competitions of the Information Security area - Capture The Flag (CTF).</Trans></p>
                <p className="my-2"><Trans i18nKey="index:outrasatividades2">We often get a nice rank in the competitions we partake and we are regarded as one of the best Brazzilian teams, and also the best university team of the country.</Trans></p>

                <p className="mt-8">
                  <Link href="/frentes">
                    <a className="hidden md:inline-block btn btn-secondary btn-shadow btn-large p-2 mr-8"><Trans i18nKey="index:verfrentes">VIEW AREAS</Trans></a>
                  </Link>

                  <Link href="/atividades">
                    <a className="btn btn-secondary btn-shadow btn-large p-2"><Trans i18nKey="index:veratividades">VIEW ACTIVITIES</Trans></a>
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
              
              <h2 className="text-2xl text-white font-bold flex-grow px-2"><Trans i18nKey="index:material">See our study material for beginners in Information Security! (in Portuguese)</Trans></h2>
              <a href="https://gitbook.ganeshicmc.com/" target="_blank" className="btn btn-secondary p-2"><Trans i18nKey="index:vergitbook">VIEW GITBOOK</Trans></a>
              
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

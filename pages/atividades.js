import React from 'react';
import { Component, useState } from 'react';

import i18n from '../locale/locale.js';
import { Trans, withTranslation, useTranslation } from 'react-i18next';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

/* import '../public/static/styles/style.css'*/ 

function Bloco({title, description, date, imagesrc, link}) {
  return (
      <div className='rounded shadow-md bg-white mx-4' style={{height: "100%"}}>
        <div className = 'border-gray-700 border-4 rounded-t h-64 '>
          <img  src = {imagesrc}
                style = {
                  {
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }
                }
          />
        </div>
        <div className='flex flex-col my-2 mx-4' style={{padding: "5px"}}>
          {
            link ? <a className='text-gray-bold text-lg' style={{fontWeight: "bold", cursor: "pointer"}} href={link} >{title}</a> :
            <span className='text-gray-bold text-lg' style={{fontWeight: "bold"}}>{title}</span>
          }
          <span className='text-gray-600 text-base' style={{fontSize: "15px"}}>{date}</span>
          <span className='text-gray-800 text-base' style={{fontWeight: "400"}}>{description}</span>
        </div>
      </div>
  );
}


function App() {
	const { t, i18n } = useTranslation();
	var cards = t('activities:activitycards', { returnObjects: true});

  return (
    <div className='container mx-auto px-4 py-8'>
      <ul className='flex flex-row flex-wrap my-4'>
        {
          cards.map((info, index) => (
            <li key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
              <Bloco title={info.title} description={info.description} date={info.date} imagesrc={info.imagesrc} link={info.link}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
	
}
const AppComponent = withTranslation()(App);

function activities ({ t }){
return (
  <React.Fragment>
    <Head
      title='Ganesh - Activities'
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <div className='flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md'>
        <h1 className='text-4xl text-center text-white'><Trans i18nKey="activities:title">Activities</Trans></h1>
      </div>

      <AppComponent />

      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
	.activity_003 {
	  background-image: url(/static/images/thumb_blueborne_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_002 {
	  background-image: url(/static/images/thumb_unesp_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_001 {
	  background-image: url(/static/images/thumb_senc2017_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
        .img {
          width: "64px";
          vertical-align:middle;
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);
}

export default withTranslation()(activities);

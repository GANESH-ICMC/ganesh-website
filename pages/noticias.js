import React from 'react';
import { useState } from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

function Block({title, description, date, imagesrc, link}) {
  return (
    <div className="flex bg-white my-4 rounded-lg shadow-md">
      <div className="p-2 xl:p-4">
        <div className="news-image bg-local bg-center bg-cover rounded-lg">
          <img src={imagesrc} style={
          {
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }
          }/>
        </div>
      </div>
      <div className="py-2 pr-2 xl:py-4 xl:pr-4">
        <h2 className = "news-title sm:text-lg"
        style = {
          {
            fontWeight: "bold",
          }
        } >
        {
            link ? <a className='text-gray-bold text-lg' style={{cursor: "pointer"}} href={link} >{title}</a> :
            title
        }
        </h2>
        <h3 className="news-date text-xs pb-2 xl:pb-4">{date}</h3>
        <p className="hidden lg:block text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}

function App() {
  const [information, setInformation] = useState([
    {title: "CryptoRave 2019 Travel", date:"May 3-4, 2019 ", description:"Travel to visit the CryptoRave event at São Paulo", imagesrc:"/static/images/thumb_cryptorave2019_0.jpg"},
    {title: "2019 Entry Process", date:"February 25, 2019", description:" The Entry process is composed of a series of classes introducing information security to prepare new members for the group's work", imagesrc:"/static/images/placeholder.jpg"},
    {title: "Safe Internet Day TV Report", date:"February 5, 2019", description:" TV report at Futura channel about information security", imagesrc:"/static/images/thumb_futura_0.jpg"},
    {title: "WHOAMI movie", date:"October 31, 2018", description:" In a partnership with the PET group we have organized the Screening of the German film \"Whoami\", which has the main themes being information security and privacy", imagesrc:"/static/images/thumb_whoami.jpg"},
    {title: "15th H2HC Travel", date:"October 20-21, 2018", description:" Travel to visit the Hacker to Hacker Conference security event at São Paulo", imagesrc:"/static/images/thumb_h2hc2018_0.jpg"},
    {title: "Admission Process of 2018", date:"March 23, 2018", description:" The admission process is composed of a series of classes introducing information security to prepare new members for the group's work", imagesrc:"/static/images/placeholder.jpg"},
    {title: "Regional Informatics School", date:"March 12-14, 2018", description:" Course about Information Security Attack Techniques for the Regional Informatics School of Presidente Prudente, Marília and São Carlos cities", imagesrc:"/static/images/thumb_ris_0.jpg"},
  ]);

  return (
      <div className="container mx-auto px-4 py-8">
        {
          information.map((info,index) => (
          <div key={index}>
            <Block title={info.title} date={info.date} description={info.description} imagesrc={info.imagesrc} /> 
          </div>
          ))
        }
      </div>
  )
}

const News = () => (
  <React.Fragment>
    <Head
      title="Ganesh - News"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
        <h1 className="text-4xl text-center text-white">News</h1>
      </div>

      <App/>

      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default News;

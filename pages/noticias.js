import React from 'react';
import { useState } from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

function Block({title, description, date, imagesrc}) {
  return (
    <div className="flex bg-white my-4 rounded-lg shadow-md">
      <div className="p-2 xl:p-4">
        <div className="news-image bg-local bg-center bg-cover rounded-lg">
          <img src={imagesrc}/>
        </div>
      </div>
      <div className="py-2 pr-2 xl:py-4 xl:pr-4">
        <h2 className="news-title sm:text-lg">
          {title}
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
    {title:"Teste", date:"01/01/2020", description:"Oi td bem", imagesrc:"/static/images/no_image_available.svg"},
    {title:"Teste1", date:"02/02/2021", description:"To testando", imagesrc:"/static/images/no_image_available.svg"}
  ])

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

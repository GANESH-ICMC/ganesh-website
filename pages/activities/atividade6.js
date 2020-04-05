import React from 'react';

import Head from '../../shared/components/head';
import Navbar from '../../shared/components/navbar/navbar';
import Footer from '../../shared/components/footer';


const atividade6 = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Roadsec 2017"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
        <h1 className="text-4xl text-center text-white">Activities</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex bg-white my-4 rounded-lg shadow-md">
          <div className="py-2 pr-2 xl:py-4 xl:pr-4">
            <h2 className="news-title sm:text-lg">
              Roadsec 2017
            </h2>
            <h3 className="news-date text-xs pb-2 xl:pb-4">11/11/2017</h3>
            <p>
              We attended our first event as a group in 2017. Roadsec is the biggest Information Security event in Brazil.               
            </p>
            <p>
              <a href="/static/images/roadsec2017.jpg" target="_blank"><img src="/static/images/roadsec2017.jpg" alt="Roadsec 2017"/></a>
            </p>
            <p>
              As a community we presented BlueBorne, a bluetooth vulnerability that affected most phones. 
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
        .news-image {
          background-image: url(/static/images/400.jpg);
          height: 75px;
          width: 75px;
        }
        .news-title {
          font-size: 0.75rem;
        }
        .news-date {
          display: none;
        }
        @media (min-width: 480px) {
          .news-title {
            font-size: 1rem;
          }
        }
        @media (min-width: 580px) {
          .news-date {
            display: block;
          }
        }
        @media (min-width: 640px) {
          .news-image {
            height: 150px;
            width: 150px;
          }
          .news-title {
            font-size: 1.125rem;
          }
        }
        @media (min-width: 1024px) {
          .news-image {
            height: 200px;
            width: 200px;
          }
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default atividade6;

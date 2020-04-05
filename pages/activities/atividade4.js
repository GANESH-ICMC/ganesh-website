import React from 'react';

import Head from '../../shared/components/head';
import Navbar from '../../shared/components/navbar/navbar';
import Footer from '../../shared/components/footer';


const atividade4 = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Pint of Science 2018"
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
              Pint of Science 2018
            </h2>
            <h3 className="news-date text-xs pb-2 xl:pb-4">15/05/2018</h3>
            <p>
              Every year, Pint of Science takes place in several cities around the world. 
              It consists of a scientific festival that aims in communicating contemporary science in an easy way to the general public. 
            </p>
            <p>
              <a href="/static/images/pintofscience2018.jpg" target="_blank"><img src="/static/images/pintofscience2018.jpg" alt="Pint of Science 2018"/></a>
            </p>
            <p>
              In 2018, Ganesh was invited to present in Ribeirão Preto a talk about hacking and drones. 
              The presentation was made by Professor Kalinka Branco, student Matheus Lopes, and Ganesh members Marcelo de Moraes and Rodrigo Bernardi. 
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

export default atividade4;

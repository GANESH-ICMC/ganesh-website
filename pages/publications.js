import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';



const Contact = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Publications"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
      <main>
        <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
          <h1 className="text-4xl text-center text-white">Publications</h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          {/*Fazer daqui pra baixo*/}

          
          <div className="flex bg-white my-4 rounded-lg shadow-md" >
            <div class="entry-content" itemprop="text" className="flex bg-white my-4 rounded-lg shadow-md entry-content">
              <p><a href="http://www.comciencia.br/os-robos-podem-ser-hackeados/">E. F. Arantes, K. R. R. Castelo Branco, "Os robôs podem ser hackeados?" ComCiência Robotics Dossier, 2019.</a></p>
            </div>
          </div>


        </div>
        <style type="text/css">{`
          .fb-page, .fb-page * {
            position: static !important;
          }`}
        </style>
        <style jsx>{`
          .contact-a {
            display: block;
            text-align: center;
          }
          .contact-a a {
            display: inline-block;
            background-color: transparent;
            color: #42dca3;
            border-color: #42dca3;
            border-style: solid;
            border-width: 1px;
            padding: 15px;
            margin: 5px;
          }
          .contact-a a:hover {
            background-color: #42dca3;
            color: black;
          }
          .container-top {
            background-image: url(/static/images/bgfull.jpg);
            height: 250px;
          }
          .entry-content ul > li{
            margin: 15px 20px;
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

export default Contact;

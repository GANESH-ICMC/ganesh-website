import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';



const Contact = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Contact"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
      <main>
        <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
          <h1 className="text-4xl text-center text-white">Contact</h1>
        </div>
        <div className="container mx-auto px-4 py-8">
          {/*Fazer daqui pra baixo*/}
          <div className="flex bg-white my-4 rounded-lg shadow-md">
            <form method="POST">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" />

              <label htmlFor="message">Message</label>
              <textarea name="message" rows="3"></textarea>

              <input type="submit" />
            </form>
            <div className="p-2 xl:p-4">
              <div class="fb-page" data-href="https://www.facebook.com/ganeshICMC" data-tabs="messages" data-width="" data-height="300" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/ganeshICMC" class="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/ganeshICMC">
                    Ganesh
                  </a>
                </blockquote
              ></div>
            </div>
            <div className="py-2 pr-2 xl:py-4 xl:pr-4">
              <h2 className="news-title sm:text-lg">
                Visit our social pages or e-mail us.
              </h2>
              <p className="hidden lg:block text-sm contact-a">
              <div class="btn-group mr-2" role="group" aria-label="Second group">
                <a href="https://github.com/GANESH-ICMC" target="_blank">
                  <button type="button" class="btn btn-outline-success">
                    <i class="fa fa-align-left fa-github" aria-hidden="true"></i>
                      Github
                    </button>
                </a>
						  </div>
               
                <a href="mailto:ganesh@icmc.usp.br">E-mail</a>
              </p>
              <h2 className="news-title sm:text-lg"></h2>
              <p className="hidden lg:block text-sm contact-a">
                MAPA AQUI
              </p>
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

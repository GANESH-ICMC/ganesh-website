import React from 'react';

import Head from '../../shared/components/head';
import Navbar from '../../shared/components/navbar/navbar';
import Footer from '../../shared/components/footer';

function albumExpand(evt) {
  let link, img, container, containerImg;
  link = evt.currentTarget;
  img = link.getAttribute("href");
  container = link.parentNode.parentNode.parentNode.querySelector(".container");
  containerImg = container.querySelector("img");
  containerImg.src = img;
  container.style.display = "block";
  evt.preventDefault();
  return false;
}

function albumClose(evt) {
  let link, container;
  link = evt.currentTarget;
  container = link.parentNode;
  container.style.display = "none";
  evt.preventDefault();
  return false;
}

function albumOpen(evt) {
  let img, container;
  img = evt.currentTarget;
  window.open(img.src, "_blank");
  //evt.preventDefault();
  return false;
}

const atividade3 = () => (
  <React.Fragment>
    <Head
      title="Ganesh - ATIVIDADE COM ALBUM DE FOTOS"
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
            ATIVIDADE COM ALBUM DE FOTOS
            </h2>
            <h3 className="news-date text-xs pb-2 xl:pb-4">05/12/1999</h3>
            <p>
              Se você notar, essa é uma atividade com layout com album de fotos. Se vc clicar na foto, ela abre maior.
            </p>
            <p>
              Aqui começa um novo parágrafo.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="album">
              <div className="photos">
                <div className="photo">
                  <a href="/static/images/400.jpg" onClick={albumExpand} target="_blank"><img src="/static/images/400.jpg" alt="" /></a>
                </div>
                <div className="photo">
                  <a href="/static/images/400.jpg" onClick={albumExpand} target="_blank"><img src="/static/images/400.jpg" alt="" /></a>
                </div>
                <div className="photo">
                  <a href="/static/images/400.jpg" onClick={albumExpand} target="_blank"><img src="/static/images/400.jpg" alt="" /></a>
                </div>
                <div className="photo">
                  <a href="/static/images/400.jpg" onClick={albumExpand} target="_blank"><img src="/static/images/400.jpg" alt="" /></a>
                </div>
                <div className="photo">
                  <a href="https://cdn.pixabay.com/photo/2013/08/20/15/47/sunset-174276_960_720.jpg" onClick={albumExpand} target="_blank"><img src="https://cdn.pixabay.com/photo/2013/08/20/15/47/sunset-174276_960_720.jpg" alt="" /></a>
                </div>
                <div className="photo">
                  <a href="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" onClick={albumExpand} target="_blank"><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" alt="" /></a>
                </div>
              </div>
              <div className="break"></div>
              <div className="container">
                <a href="#" onClick={albumClose} className="closebtn">&times;</a>
                <img src="" onClick={albumOpen} alt="" />
                <p></p>
              </div>
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

export default atividade3;

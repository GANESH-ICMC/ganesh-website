import React from 'react';

import Head from '../../shared/components/head';
import Navbar from '../../shared/components/navbar/navbar';
import Footer from '../../shared/components/footer';

import { Trans, withTranslation } from 'react-i18next';

function usp ({t}){

return (
  <React.Fragment>
    <Head
      title='Ganesh - USP'
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      {/* Top-level Jumbotron */}
      <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
        <h1 className="text-4xl text-center text-white"><Trans i18nKey="usp:topTitle">Our University</Trans></h1>
      </div>

      {/* Section - Introduction */}
      <section className="USP__Introduction" style={{backgroundColor: "#fff" }}>
      <div className="container mx-auto">
        <div className="flex flex-row-reverse items-center py-8">
            
            <div className="USP__Introduction_Text text-justify px-8 md:px-12 flex-grow">
              <p className="my-4"><Trans i18nKey="usp:introduction1">The <a href="https://www5.usp.br/" target="_blank">University of São Paulo</a> (Portuguese: Universidade de São Paulo, USP) is a public university in the Brazilian state of São Paulo. It is the largest Brazilian public university and the country's most prestigious educational institution, the best university in Ibero-America, and holds a high reputation among world universities, being ranked 100 worldwide in reputation by the Times Higher Education World University Rankings. USP is involved in teaching, research and university extension in all areas of knowledge, offering a broad range of courses.</Trans></p>

              <p className="my-4"><Trans i18nKey="usp:introduction2">The university was founded in 1934, regrouping already existing schools in the state of São Paulo, such as the Faculdade de Direito do Largo de São Francisco (Faculty of Law), the Escola Politécnica (Engineering School) and the Escola Superior de Agricultura Luiz de Queiroz (College of Agriculture). The university's foundation is marked by the creation in 1934 of the Faculdade de Filosofia, Ciências e Letras (Faculty of Philosophy, Sciences and Letters, 1934-1968), and has subsequently created new departments, becoming one of the largest institutions of higher education in Latin America, with approximately 90,000 enrolled students. Currently, it has eleven campuses, four of them in the city of São Paulo. The remaining campuses are in the cities of Bauru, Lorena, Piracicaba, Pirassununga, Ribeirão Preto and two in São Carlos.</Trans></p>
            </div>
            
            <div className="USP__Introduction_Image px-8 md:pr-0">
              <a href="https://www.icmc.usp.br/" target="_blank">
                <img src='/static/images/pages/aboutus_usp.png' alt='ICMC Logo'/>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Section - Pillars */} 
      <section className="USP__Pillars" style={{backgroundColor: "#e2e8f0" }}>
        <div className="container mx-auto">
          <div className="flex flex-col items-center p-8 md:p-12">

            {/* First Pillar - Statistics */}
            <div className="Pillars flex flex-row" style={{backgroundColor: "#fff" }}>
              <div className="Pillars_Image">
                <img src='/static/images/pages/aboutus_usp_sanca.jpg'  alt='USP São Carlos from Sky'/>
              </div>

              <div className="Pillars_Text text-justify flex-grow p-4 md:p-8">
                <h1 className="text-4xl font-bold"><Trans i18nKey="usp:statsTitle">Statistics</Trans></h1>
                <p className="my-4"><Trans i18nKey="usp:statsp1">Today USP has five hospitals and offers 247 undergraduate programs and 239 graduate programs in all areas of study. The university houses altogether 24 museums and galleries – with half a million visitors a year – two theaters, a cinema, a TV channel and an orchestra.The University of São Paulo welcomes people from all continents and stimulates this process via networks and consortiums (International Office – USP), such as Erasmus Mundus, Associação das Universidades de Língua Portuguesa, and Rede Magalhães (SMILE - Student Mobility in Latin America, Caribbean and Europe), among others.</Trans></p>

                <p className="my-4"><Trans i18nKey="usp:statsp2">The university today has 3362298 participants in cultural and extension activities, 97982 students enrolled and 5631 teachers.</Trans></p>
              </div>
            </div>

            {/* Second Pillar - International Cooperation */}
            <div className="Pillars flex flex-row-reverse mt-12" style={{backgroundColor: "#fff" }}>
              <div className="Pillars_Image">
                <img src='/static/images/pages/aboutus_international.jpg' alt='USP International '/>
              </div>

              <div className="Pillars_Text text-justify flex-grow p-4 md:p-8">
                <h1 className="text-4xl font-bold"><Trans i18nKey="usp:intlTitle">International Cooperation</Trans></h1>
                <p className="my-4"><Trans i18nKey="usp:intlp1">Universidade de São Paulo has an International Cooperation Office whose aim is to promote students, faculty and researchers’ mobility by enhancing cooperation and helping with mobility logistics. Nowadays, USP has over 1,000 international agreements with several institutions all over the world. Students and faculty members enjoy a multicultural environment with people of different cultural backgrounds. Access: <a href="http://www.usp.br/internationaloffice/en/">AUCANI USP</a></Trans></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
        
        .USP__Introduction_Image img { 
          display: block;
          max-width: 350px;
        }
        
        .USP__Introduction a { 
          font-weight: bold;
          // color: #009688;
        }
        
        .USP__Introduction a:hover { 
          color: #0ca899;
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .USP__Introduction .container > * { 
            flex-flow: column nowrap;
            text-align: center;
          }
        }

        .Pillars { 
          box-shadow: 0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);
          border-radius: .5rem;
          overflow: hidden;
        }
        
        .Pillars .Pillars_Image { 
          min-width: 300px;
        }
        
        .Pillars a { 
          font-weight: bold;
        }

        .Pillars a:hover { 
          color: #0ca899;
          text-decoration: underline;
        }

        .Pillars img { 
          object-fit: cover;
          width: 300px;
          height: 100%;
        }

        @media (max-width: 768px) {
          .Pillars { 
            flex-flow: column nowrap;
          }

          .Pillars img { 
            max-height: 200px;
            width: 100%;
          }
        }

      `}</style>
    </main>
    <Footer
      title="Ganesh - USP"
      description='Extracurricular group focused on information security.'
    />
  </React.Fragment>
);


}
export default withTranslation() (usp);


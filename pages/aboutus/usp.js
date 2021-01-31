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
      <div className='jumbotron bg-fixed bg-cover text-center text-white h-screen shadow-md bg-center'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full p-4'>
          <img src='/static/images/logo.svg' className='w-48' alt='Ganesh logo' />
          <h2 className='text-2xl'>
            <Trans i18nKey="usp:extracurricular">
            Extracurricular group focused on information security.
            </Trans>
          </h2>
        </div>
      </div>
      <section>
        <div className='container h-full mx-auto flex flex-col items-center text-center py-4'>
          <h1 className='text-4xl font-bold py-8 md:py-16 px-4'>
            <Trans i18nKey="usp:ouruni">
              Our University
            </Trans>
          </h1>
          <div className='flex flex-row flex-wrap justify-center pb-8 md:pb-16'>
            <div className='w-full md:w-full p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  <Trans i18nKey="usp:wikiUsp">
                    <p> The University of São Paulo (Portuguese: Universidade de São Paulo, USP) is a public university in the Brazilian state of São Paulo. It is the largest Brazilian public university and the country's most prestigious educational institution, the best university in Ibero-America, and holds a high reputation among world universities, being ranked 100 worldwide in reputation by the Times Higher Education World University Rankings. USP is involved in teaching, research and university extension in all areas of knowledge, offering a broad range of courses. <br/> <br/></p>

                    <p>The university was founded in 1934, regrouping already existing schools in the state of São Paulo, such as the Faculdade de Direito do Largo de São Francisco (Faculty of Law), the Escola Politécnica (Engineering School) and the Escola Superior de Agricultura Luiz de Queiroz (College of Agriculture). The university's foundation is marked by the creation in 1934 of the Faculdade de Filosofia, Ciências e Letras (Faculty of Philosophy, Sciences and Letters, 1934-1968), and has subsequently created new departments, becoming one of the largest institutions of higher education in Latin America, with approximately 90,000 enrolled students. Currently, it has eleven campuses, four of them in the city of São Paulo. The remaining campuses are in the cities of Bauru, Lorena, Piracicaba, Pirassununga, Ribeirão Preto and two in São Carlos.</p>
                  </Trans>
                </p>
              </div>
            </div>
            
            <div className='w-full md:w-full p-4'>
              <h2 className='text-4xl font-bold py-8'>
              <Trans i18nKey="usp:estatisticas">
                Statistics 
              </Trans>
              </h2>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed' align="left">
              <Trans i18nKey="usp:uspstats">
                <p> Today USP has five hospitals and offers 247 undergraduate programs and 239 graduate programs in all areas of study. The university houses altogether 24 museums and galleries – with half a million visitors a year – two theaters, a cinema, a TV channel and an orchestra.The University of São Paulo welcomes people from all continents and stimulates this process via networks and consortiums (International Office – USP), such as Erasmus Mundus, Associação das Universidades de Língua Portuguesa, and Rede Magalhães (SMILE - Student Mobility in Latin America, Caribbean and Europe), among others. <br/><br/>
                
                The university today has 3362298 participants in cultural and extension activities, 97982 students enrolled and 5631 teachers.</p>
              </Trans>
              </div>
            </div>


            <div className='w-full md:w-full p-4'>
              <h2 className='text-4xl font-bold py-8'>
              <Trans i18nKey="usp:intcoop">
                International Cooperation 
              </Trans>
              </h2>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed' align="left">
                <p align="justify">
                  <Trans i18nKey="usp:uspint">niversidade de São Paulo has an International Cooperation Office whose aim is to promote students, faculty and researchers’ mobility by enhancing cooperation and helping with mobility logistics. Nowadays, USP has over 1,000 international agreements with several institutions all over the world. Students and faculty members enjoy a multicultural environment with people of different cultural backgrounds.Access:</Trans><a href="http://www.usp.br/internationaloffice/en/"> AUCANI USP</a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      .jumbotron {
        background-image: url(/static/images/bgfull.jpg);
      }
      .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
      }
      .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      }

      a:link {
        color: blue;
        background-color: transparent;
        text-decoration: none;
      }

      a:visited {
        color: purple;
        background-color: transparent;
        text-decoration: none;
      }

      a:hover {
        color: red;
        background-color: transparent;
        text-decoration: underline;
      }

      a:active {
        color: yellow;
        background-color: transparent;
        text-decoration: underline;
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


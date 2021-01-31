import React from 'react';
import Head from '../../shared/components/head';
import Navbar from '../../shared/components/navbar/navbar';
import Footer from '../../shared/components/footer';

import { Trans, withTranslation } from 'react-i18next';

function icmc({t}) {
  return(<React.Fragment>
    <Head
      title='Ganesh - ICMC'
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <div className='jumbotron bg-fixed bg-cover text-center text-white h-screen shadow-md bg-center'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full p-4'>
          <img src='/static/images/logo.svg' className='w-48' alt='Ganesh logo' />
          <h2 className='text-2xl'>
            <Trans i18nKey="icmc:extracurricular">
            Extracurricular group focused on information security.
            </Trans>
          </h2>
        </div>
      </div>
      <section>
        <div className='container h-full mx-auto flex flex-col items-center text-center py-4'>
          <h1 className='text-4xl font-bold py-8 md:py-16 px-4'>
          <Trans i18nKey="icmc:ourinst">
            Our Institute - ICMC
          </Trans>
          </h1>
          <div className='flex flex-row flex-wrap justify-center pb-8 md:pb-16'>
            <div className='w-full md:w p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <Trans i18nKey="icmc:part1">
                <p align="left">
                The Instituto de Ciências Matemáticas e de Computação (ICMC) at University of São Paulo (USP) is one of the most important Brazilian institutions in the fields of Computer Science, Mathematics, Applied Mathematics and Statistics.
                <br/>       
                <br/> 
                </p>
                <p align="left">
                Our mission is to produce, evolve and disseminate knowledge and innovation in the areas of Mathematics, Computer Science and Statistics, train human resources at undergraduate and graduate levels and promote cultural and social insertion actions. This mission is defined by its commitment to the need for social, scientific and technological evolution in the region of São Carlos, the state of São Paulo and Brazil.
                <br/>       
                <br/>  
                </p>              
                <p>
                The ICMC's vision is to become a worldwide reference in teaching and research contributing decisively to the evolution of knowledge in its areas of expertise, training high-level human resources and supporting the scientific, technological and social development of the region, state and country.
                </p>
                </Trans>
              </div>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center md:p-16 tracking-wide leading-relaxed' class="video-container">
                <iframe className='w-full md:w p-4' 
                  height="600"
                  src="https://www.youtube.com/embed/_7aU2zcof34"
                  allowfullscreen="true">
                </iframe> 
              </div>
            </div>
            <div className='w-full md:w-full p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed' align="left">
                <p>&nbsp;</p>
                <Trans i18nKey="icmc:history">
                <p>The Institute was created in 1971 and actually occupies an area of 18,000 square meters. It has approximately 2,000 students divided into <a href="https://icmc.usp.br/en/admission/undergraduate">eight undergraduate courses</a> and <a href="https://icmc.usp.br/en/admission/graduate">five graduate programs</a> including a staff of approximately 150 faculty members and 120 technical administrative staff.&nbsp;The ICMC&rsquo;s student presents a dynamic and solid formation&nbsp;that prepares and distinguishes him or her in their&nbsp;professional careers.&nbsp;
                <br/>       
                <br/>  </p>
                <p>The ICMC is recognized worldwide as a center of excellence in the production and dissemination of knowledge. Our impact on society is made by training human resources at undergraduate and graduate levels, developing leading research and community extension service.
                <br/>       
                <br/>  </p>
                <p>Our modern and well-equipped facilities include a privileged and extensive green area. The ICMC has a library holding approximately 140 thousand volumes and 23 thousand electronic journal titles. It is also equipped with state-of-the-art educational environments, auditoriums, multimedia and video conference classrooms, as well as 24-hour open educational laboratories. The ICMC computer park comprises up-to-date equipment and provides high-speed wireless internet over 100% of its area. Get to know ICMC better by taking our virtual tour.
                <br/>       
                <br/>  </p>
                <p>In addition, the institute can count on the infrastructure of the USP campus in S&atilde;o Carlos, which offers facilities such as a restaurant, lodging, transportation between the campuses, medical and dental services, a day care center and a sports center.
                <br/>       
                <br/>  </p>
                <p>It&nbsp;is located at the USP campus in&nbsp;<a href="https://en.wikipedia.org/wiki/S&atilde;o_Carlos" target="_blank" rel="noopener noreferrer">S&atilde;o Carlos</a>, 230 km away from the city of S&atilde;o Paulo.&nbsp;The city is known as the "Capital of Science and Technology" because of the universities and researchers we have here and also as the "City of Climate" because it is common to experience the four seasons of the year on the same day; cold in the morning, very hot in the middle of the afternoon, rain at the end of the day and a cool breeze at night.&nbsp;It is also the first city in South America in terms of the number of PhD holders per inhabitant, and has an excellent track record in innovation and developing high technology. There are two important public universities (USP and the <a href="https://www2.ufscar.br" target="_blank" rel="noopener noreferrer">Federal University of S&atilde;o Carlos - UFSCar</a>) in the city, as well as a private university, a technology faculty, two <a href="https://www.embrapa.br" target="_blank" rel="noopener noreferrer">Embrapa</a> research centers, two technology parks and various technology-based companies.&nbsp; <br/>       
                <br/> </p>
                </Trans>
              </div>
            </div>

            <div className='w-full md:w-full p-4'>            
            <h2 className='text-4xl font-bold py-8'>
            <Trans i18nKey="icmc:teaching">
            Teaching
            </Trans>
            </h2>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed' align="left">
                <Trans i18nKey="icmc:teachicmc">
                <p>In addition to offering eight undergraduate courses, the ICMC is responsible for providing primary training courses for students in Architecture, Engineering, Physics and Chemistry courses, coordinated by the other units of the S&atilde;o Carlos campus. At the graduate level, the ICMC programs are among the best in the country, having trained Masters and Doctors who now occupy positions in prestigious teaching and research institutions, governmental organizations and companies in Brazil and abroad. ICMC graduates have a dynamic background that stands out in the market, whether in an academic career or any area of professional activity.</p>
                </Trans>
              </div>
            </div>

            <div className='w-full md:w-full p-4'>
              <h2 className='text-4xl font-bold py-8'>
              <Trans i18nKey="icmc:research">
              Research
              </Trans>
              </h2>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed' align="left">              
              <Trans i18nKey="icmc:resicmc"> 
                <p>The Institute's research has been published in the most important specialized journals and results in creating products, technologies and patents having national and international impact in their areas of knowledge and solutions to social problems. Faculty members, postdoctoral students and students often take part in scientific events, cooperative projects and agreements with foreign institutions due to the maturity of research groups, whose projects have received constant support from development agencies such as FAPESP, CNPq, CAPES, FINEP and the European Commission. Technological innovation, another important facet, develops products having a high economic and social impact through collaboration with industry, research centers and governmental agencies. Studies conducted at ICMC have often been honored at national and international events, as well as having received widespread attention and dissemination through the mass media. Many faculty members are involved in large-scale projects such as participating and coordinating thematic research networks such as the National Institutes of Science and Technology (INCTs), Research Support Centers (NAPs) and the Research Innovation and Dissemination Center (CEPID). Get to know the ICMC <a href="https://icmc.usp.br/en/research/groups">research groups</a>.</p>
              </Trans>
              </div>
            </div>

            <div className='w-full md:w-full p-4'>

              <h2 className='text-4xl font-bold py-8'>
              <Trans i18nKey="icmc:cultext">
              Culture and extension
              </Trans>
              </h2>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed' align="left">
              <Trans i18nKey="icmc:culticmc">
              <p>The ICMC extends the benefits from its cultural and extension activities to the community through courses, events, exhibitions, cultural presentations and social projects. One of the main features of the institute is the <a href="http://mc.icmc.usp.br" target="_blank" rel="noopener noreferrer">Professor Odelar Leite Linhares Computer Museum</a> holding more than two hundred pieces of numerical calculus in its collection.&nbsp;In addition, we have been extending our activities to the community and developed partnership with society, to perform actions with broad impact and reach. These activities involve partnerships with industry,&nbsp;research centers, government agencies,&nbsp;private associations and NGOs.</p>
              </Trans>
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
      title="Ganesh - ICMC"
      description='Extracurricular group focused on information security.'
    />
  </React.Fragment>
  );
}

export default withTranslation() (icmc);

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
      {/* Top-level Jumbotron */}
      <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
        <h1 className="text-4xl text-left text-center text-white"><Trans i18nKey="icmc:topTitle">Our Institute - ICMC</Trans></h1>
      </div>

      {/* Section - Introduction */}
      <section className="Institute__Introduction" style={{backgroundColor: "#fff" }}>
        <div className="container mx-auto">
          <div className="flex flex-row-reverse items-center py-8">
            
            <div className="Institute__Introduction_Text text-justify px-8 md:px-12 flex-grow">
              <p className="my-4"><Trans i18nKey="icmc:introduction1">The <a href="https://www.icmc.usp.br/" target="_blank">Institute Of Computer and Mathematical Sciences</a>, Portuguese: Instituto de Ciências Matemáticas e de Computação (ICMC), at University of São Paulo (USP) is one of the most important Brazilian institutions in the fields of Computer Science, Mathematics, Applied Mathematics and Statistics.</Trans></p>

              <p className="my-4"><Trans i18nKey="icmc:introduction2">Our mission is to produce, evolve and disseminate knowledge and innovation in the areas of Mathematics, Computer Science and Statistics, train human resources at undergraduate and graduate levels and promote cultural and social insertion actions. This mission is defined by its commitment to the need for social, scientific and technological evolution in the region of São Carlos, the state of São Paulo and Brazil. </Trans></p>

              <p className="my-4"><Trans i18nKey="icmc:introduction3">The ICMC's vision is to <strong>become a worldwide reference in teaching and research</strong> contributing decisively to the evolution of knowledge in its areas of expertise, training high-level human resources and supporting the scientific, technological and social development of the region, state and country. </Trans></p>
            </div>
            
            <div className="Institute__Introduction_Image px-8 md:pr-0">
              <a href="https://www.icmc.usp.br/" target="_blank">
                <img src='/static/images/pages/aboutus_icmc.png' alt='ICMC Logo'/>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Section - Video */}
      <section className="Institute__Video" style={{backgroundColor: "#e2e8f0" }}>
        <div className="container mx-auto">
          <div className="flex flex-row-reverse items-center py-8 px-8">
            <iframe className='w-full md:w'  height="600"
              src="https://www.youtube.com/embed/_7aU2zcof34"
              allowFullScreen={true}>
            </iframe>
          </div>
        </div>
      </section>

      {/* Section - History */} 
      <section className="Institute__History" style={{backgroundColor: "#fff" }}>
        <div className="container mx-auto">
          <div className="flex flex-row-reverse items-center py-8 px-8">
          
            <div className="Institute__History_Text text-justify flex-grow">
              <h1 className="text-4xl text-left font-bold"><Trans i18nKey="icmc:historyTitle">History and Infrastructure</Trans></h1>
                
              <p className="my-4"><Trans i18nKey="icmc:history1">The Institute was created in 1971 and actually occupies an area of 18,000 square meters. It has approximately 2,000 students divided into eight undergraduate courses and five graduate programs, including a staff of approximately 150 faculty members and 120 technical administrative staff. The ICMC's student presents a dynamic and solid formation that prepares and distinguishes him or her in their professional careers.</Trans></p>

              <p className="my-4"><Trans i18nKey="icmc:history2">The ICMC is recognized worldwide as a center of excellence in the production and dissemination of knowledge. Our impact on society is made by training human resources at undergraduate and graduate levels, developing leading research and community extension service.</Trans></p>

              <img src='/static/images/pages/aboutus_jardim.png' title="ICMC Biblioteca (Library)"  alt='ICMC Biblioteca (Library)'/>

              <p className="my-4"><Trans i18nKey="icmc:history3">Our modern and well-equipped facilities include a privileged and extensive green area. The ICMC has a library holding approximately 140 thousand volumes and 23 thousand electronic journal titles. It is also equipped with state-of-the-art educational environments, auditoriums, multimedia and video conference classrooms, as well as 24-hour open educational laboratories. The ICMC computer park comprises up-to-date equipment and provides high-speed wireless internet over 100% of its area. Get to know ICMC better by taking our virtual tour.</Trans></p>

              <p className="my-4"><Trans i18nKey="icmc:history4">In addition, the institute can count on the infrastructure of the USP campus in São Carlos, which offers facilities such as a restaurant, lodging, transportation between the campuses, medical and dental services, a day care center and a sports center.</Trans></p>

              <p className="my-4"><Trans i18nKey="icmc:history5">It is located at the USP campus in São Carlos, 230 km away from the city of São Paulo. The city is known as the "Capital of Science and Technology" because of the universities and researchers we have here and also as the "City of Climate" because it is common to experience the four seasons of the year on the same day; cold in the morning, very hot in the middle of the afternoon, rain at the end of the day and a cool breeze at night. It is also the first city in South America in terms of the number of PhD holders per inhabitant, and has an excellent track record in innovation and developing high technology. There are two important public universities (USP and the Federal University of São Carlos - UFSCar) in the city, as well as a private university, a technology faculty, two Embrapa research centers, two technology parks and various technology-based companies.</Trans></p>   
            </div>
          
          </div>
        </div>
      </section>

      {/* Section - Three Pillars */} 
      <section className="Institute__Pillars" style={{backgroundColor: "#e2e8f0" }}>
        <div className="container mx-auto">
          <div className="flex flex-col items-center p-8 md:p-12">

            {/* First Pillar - Teaching */}
            <div className="Pillars flex flex-row" style={{backgroundColor: "#fff" }}>
              <div className="Pillars_Image">
                <img src='/static/images/pages/aboutus_ensino.jpg' title="ICMC Biblioteca (Library)"  alt='ICMC Biblioteca (Library)'/>
              </div>

              <div className="Pillars_Text text-justify flex-grow p-4 md:p-8">
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="icmc:teachingTitle">Teaching</Trans></h1>
                <p className="my-4"><Trans i18nKey="icmc:teaching1">In addition to offering eight undergraduate courses, the ICMC is responsible for providing primary training courses for students in Architecture, Engineering, Physics and Chemistry courses, coordinated by the other units of the São Carlos campus. At the graduate level, the ICMC programs are among the best in the country, having trained Masters and Doctors who now occupy positions in prestigious teaching and research institutions, governmental organizations and companies in Brazil and abroad. ICMC graduates have a dynamic background that stands out in the market, whether in an academic career or any area of professional activity.</Trans></p>
              </div>
            </div>

            {/* Second Pillar - Searching */}
            <div className="Pillars flex flex-row-reverse mt-12" style={{backgroundColor: "#fff" }}>
              <div className="Pillars_Image">
                <img src='/static/images/pages/aboutus_pesquisa.jpg' title="ICMC Biblioteca (Library)"  alt='ICMC Biblioteca (Library)'/>
              </div>

              <div className="Pillars_Text text-justify flex-grow p-4 md:p-8">
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="icmc:researchTitle">Research</Trans></h1>
                <p className="my-4"><Trans i18nKey="icmc:research1">The Institute's research has been published in the most important specialized journals and results in creating products, technologies and patents having national and international impact in their areas of knowledge and solutions to social problems. Faculty members, postdoctoral students and students often take part in scientific events, cooperative projects and agreements with foreign institutions due to the maturity of research groups, whose projects have received constant support from development agencies such as FAPESP, CNPq, CAPES, FINEP and the European Commission. Technological innovation, another important facet, develops products having a high economic and social impact through collaboration with industry, research centers and governmental agencies. Studies conducted at ICMC have often been honored at national and international events, as well as having received widespread attention and dissemination through the mass media. Many faculty members are involved in large-scale projects such as participating and coordinating thematic research networks such as the National Institutes of Science and Technology (INCTs), Research Support Centers (NAPs) and the Research Innovation and Dissemination Center (CEPID).</Trans></p>
              </div>
            </div>

            {/* Last Pillar - Culture and Extension */}
            <div className="Pillars flex flex-row mt-12" style={{backgroundColor: "#fff" }}>
              <div className="Pillars_Image">
                <img src='/static/images/pages/aboutus_cultura.jpg' title="ICMC Biblioteca (Library)"  alt='ICMC Biblioteca (Library)'/>
              </div>

              <div className="Pillars_Text text-justify flex-grow p-4 md:p-8">
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="icmc:cultureTitle">Culture and Extension</Trans></h1>
                <p className="my-4"><Trans i18nKey="icmc:culture1">The ICMC extends the benefits from its cultural and extension activities to the community through courses, events, exhibitions, cultural presentations and social projects. One of the main features of the institute is the Professor Odelar Leite Linhares Computer Museum holding more than two hundred pieces of numerical calculus in its collection. In addition, we have been extending our activities to the community and developed partnership with society, to perform actions with broad impact and reach. These activities involve partnerships with industry, research centers, government agencies, private associations and NGOs.</Trans></p>
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

        .Institute__Introduction_Image img { 
          display: block;
          max-width: 350px;
        }
        
        .Institute__Introduction a { 
          // color: #009688;
          font-weight: bold;
        }
        
        .Institute__Introduction a:hover { 
          color: #0ca899;
          text-decoration: underline;
        }

        .Institute__Video iframe { 
          box-shadow: 0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);
        }

        .Institute__History_Text img { 
          width: 400px;
          float: right;
          margin-left: 2rem;
        }

        .AboutUs__Organization a,
        .AboutUs__GroupIntro a { 
            color: #0ca899;
        }
          
        .AboutUs__Organization a:hover,
        .AboutUs__GroupIntro a:hover { 
          color: #009688;
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .Institute__History .container > *,
          .Institute__Introduction .container > * { 
            flex-flow: column nowrap;
            text-align: center;
          }

          .Institute__Introduction_Image img {
            max-width: 100%
          }

          .Institute__Video iframe { 
            height: 300px !important;
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
      title="Ganesh - ICMC"
      description='Extracurricular group focused on information security.'
    />
  </React.Fragment>
  );
}

export default withTranslation() (icmc);

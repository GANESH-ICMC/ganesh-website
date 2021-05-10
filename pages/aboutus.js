import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

import { Trans, withTranslation } from 'react-i18next';

function aboutus ({ t }){

  return (
    <React.Fragment>
      <Head
        title='Ganesh - About Us'
        description={t('index:description')}
      />
      <Navbar />
      <main>
        {/* Top-level Jumbotron */}
        <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
          <h1 className="text-4xl text-center text-white"><Trans i18nKey="aboutus:title">About Us</Trans></h1>
        </div>

        {/* First Section - Group Name */}
        <section className="AboutUs__GroupIntro" style={{backgroundColor: "#fff" }}>
          <div className="container mx-auto">
            <div className="flex flex-row-reverse items-center py-8 md:py-12">
              
              <div className="AboutUs__GroupIntro_Text text-justify px-8 md:px-12 flex-grow">
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="aboutus:goals_title">Ganesh's Goals</Trans></h1>
                
                <p className="my-4"><Trans i18nKey="aboutus:ganesh_god">Ganesh is one of the most venerated gods of hinduism, referenced as the <strong>"Destroyer of Obstacles"</strong> and the <strong>"Master of Intelect"</strong>. Inspired by this divinity and by the growing importance of <strong>Information Security</strong> on the context of the current life, some students from ICMC-USP decided to create an extracurricular group in this area.</Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:goals">Through studying and developing techniques and algorithms geared towared computer systems and computer networks security, the group aims to provide the members an easied learning and knowledge exchange experience.</Trans></p>
                
                <p className="my-4"><Trans i18nKey="aboutus:external">Other than that, the group also aims to integrate and interact with groups external to the University, as well as spreading its experiences and gathered knowledge along the external comunity through activities, mini courses and public talks.</Trans></p>
              </div>
              
              <div className="AboutUs__GroupIntro_Image px-8">
                <a href="https://pt.wikipedia.org/wiki/Ganexa" target="_blank">
                  <img src='/static/images/pages/aboutus_ganesh.jpg' alt='Ganesha God'/>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* First Section - Group Organization */}
        <section className="AboutUs__Organization" style={{backgroundColor: "#333" }}>
          <div className="container mx-auto">
            <div className="flex flex-row items-start py-8 md:py-12">
              
              <div className="AboutUs__Organization_Org text-justify text-white px-8 md:px-12 md:w-1/2">
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="aboutus:organization_title">Organização do Grupo</Trans></h1>
                
                <p className="my-4"><Trans i18nKey="aboutus:formal_start">With the formal start in 2017, Ganesh is organized in <strong>Study and Research Areas</strong>, being actually composed by the following active areas: Cryptography, Network and Pentesting, Reverse Engineering, Web Security and Hardware Hacking.</Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:meetings">That way, it is on the members criteria to decide which topics are the most interesting ones and to participate in several weekly meetings that happen during the school semester.</Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:colaborators">Also, the group allows that people that are not linked to University of São Paulo participate as colaborators, allowing them to participate in its activities and meetings. The group has a really flexile and horizontal structure that can be checked with more detail in our <a href="#" target="_blank">Rule Statute</a>(in Portuguese).</Trans></p>
              </div>

              <div className="AboutUs__Organization_Ping text-justify text-white px-8 md:px-12 md:w-1/2">
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="aboutus:ping_title">I want to become a Member!</Trans></h1>
                
                <p className="my-4"><Trans i18nKey="aboutus:ping1">To become a member at Ganesh, the only pre-requisite is to participate in our <strong>PIng (Ingress Process)</strong> that occurs throughout the first semester of the school year, which happens yearly.</Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:ping2">During the process, every participant will participate in classes that will introduce them to basic concepts of different areas, other than solving practical weekly Capture the Flag challenges made for the process. It is not necessary to have previous knowledge to participate on it.</Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:ping3">At the end of the PIng, the participants that are interested in continuing to participate in the group can start their participations in the area weekly meetings after signing a <a href="#" target="_blank">Responsability Term</a>.. This term defines the ethical guidelines that should be followed, at risk of being temporarily of permanently removed from the group in case of infractions.</Trans></p>
              </div>

            </div>
          </div>
        </section>

        <section className="AboutUs__Map">
          <iframe src="/map" style={{display: "block", width: "100%", height: "300px"}}></iframe>
        </section>

        <style jsx>{`
          .container-top {
            background-image: url(/static/images/bgfull.jpg);
            height: 250px;
          }

          .AboutUs__GroupIntro_Image img { 
            display: block;
            max-width: 350px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            filter: grayscale(60%);
            transition: filter 0.5s;
            transition-timing-function: ease-in-out;
          }
          
          .AboutUs__GroupIntro_Image img:hover { 
            filter: grayscale(20%);
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
          
          .AboutUs__Map #map { 
            height: 300px;
          }

          @media (max-width: 768px) {
            .AboutUs__GroupIntro .container > *,
            .AboutUs__Organization .container > * { 
              flex-flow: column nowrap;
              text-align: center;
            }

            .AboutUs__GroupIntro_Image img { 
              max-width: 100%;
            }

            .AboutUs__Organization_Ping h1 {
              border-top: solid 1px #666;
              margin-top: 1rem;
              padding-top: 1rem; 
            }
          }

        `}</style>
      </main>
      <Footer
        title="Ganesh - About Us"
        description='Extracurricular group focused on information security.'
      />
    </React.Fragment>
  );

}


export default withTranslation() (aboutus);

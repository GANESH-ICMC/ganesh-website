import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

const aboutus = () => (
  <React.Fragment>
    <Head
      title='Ganesh - About Us'
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <div className='jumbotron bg-fixed bg-cover text-center text-white h-screen shadow-md bg-center'>
        <div className='container mx-auto flex flex-col items-center justify-center h-full p-4'>
          <img src='/static/images/logo.svg' className='w-48' alt='Ganesh logo' />
          <h2 className='text-2xl'>
            Extracurricular group focused on information security.
          </h2>
        </div>
      </div>
      <section>
        <div className='container h-full mx-auto flex flex-col items-center text-center py-4'>
          <h1 className='text-4xl font-bold py-8 md:py-16 px-4'>
            Our Institute
          </h1>
          
          <div className='flex flex-row flex-wrap justify-center pb-8 md:pb-16'>
            <div className='w-full md:w p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  Ganesh is one of the most venerated gods of hinduism, known as the simple of logical solutions, also referenced as the "Destroyer of Obstacles". Inspired by this divinity and by the growing importance of the security of the information on the context of the current life, some students from ICMC-USP decided to create an extracurricular group in this area. As the principal goal, the group pretends do spread a culture of awereness about the need of protecting data and systems. To do so, <a href="/atividades">activities</a> of research, education and extension related to the theme are realized by the group.
                </p>
              </div>
            </div>

            <div className='w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  With the formal start in 2017, the group has been seeking to learn and teach the most it can about security in general.
                </p>
                <p align="justify">
                  To do so, we are organized in five main study and research areas, they are: Cryptography, Network Security, Privacy and GDPR, Reverse Engineering and Web Security. Each of them is described with more details in the respective <a href="/frentes">area page.</a>
                </p>
              </div>
            </div>
            <div className='w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  The group is a non lucrative association and it is open to partnerships. It is mainly formed by undergraduation students of the <a href="/aboutus/usp">University Of São Paulo</a> and located in São Carlos, Brazil, although it is open to the participation of external colaborators if they wish to do so. 
                </p>
                <p align="justify"> 
                  In order to make the knowledge gained by the group public, most of our materials are currently stored at our <a href="https://github.com/ganesh-icmc">Github</a>.
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
      title="Ganesh - About Us"
      description='Extracurricular group focused on information security.'
    />
  </React.Fragment>
);

export default aboutus;

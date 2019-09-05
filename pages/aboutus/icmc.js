import React from 'react';

import Head from '../../shared/components/head';
import Navbar from '../../shared/components/navbar/navbar';
import Footer from '../../shared/components/footer';

const Icmc = () => (
  <React.Fragment>
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
            <div className='w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  Placeholder1.
                </p>
              </div>
            </div>
            <div className='w-full md:w-1/2 p-4'>
              <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                <p align="justify">
                  Placeholder2.
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
      `}</style>
    </main>
    <Footer
      title="Ganesh - ICMC"
      description='Extracurricular group focused on information security.'
    />
  </React.Fragment>
);

export default Icmc;

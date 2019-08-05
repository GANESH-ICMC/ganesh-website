import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

const elements = [0, 1, 2, 3, 4, 5];

const Activities = () => (
  <React.Fragment>
    <Head
      title='Ganesh - Atividades'
      description='Grupo de extensão focado em segurança da informação.'
    />
    <Navbar />
    <main>
      <div className='flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md'>
        <h1 className='text-4xl text-center text-white'>Atividades</h1>
      </div>
      <div className='container mx-auto px-4 py-8'>
        <ul className='flex flex-row flex-wrap my-4'>
          {elements.map((value, index) => {
            return (
              <li
                key={index}
                className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'
              >
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>Nome</span>
                    <span className='text-gray-800 text-base'>Descrição</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Activities;

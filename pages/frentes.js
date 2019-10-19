import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

const Fronts = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Areas"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
    <div className='flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md'>
        <h1 className='text-4xl text-center text-white'>Areas</h1>
      </div>
      <div className='container mx-auto px-4 py-8'>
        <ul className='flex flex-row flex-wrap my-4'>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='flex-auto rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64 cryptography' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Cryptography</span>
                <span className='text-gray-800 text-base'>This area focuses on the principles and methods of codification on comunication in order to make information unintelligible to non authorized third parties.</span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='flex-auto rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64 networking' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Network Security</span>
                <span className='text-gray-800 text-base'>This area focuses in the studies of computer netwoks, contemplating communication protocols, wired and wireless technologies as well as sniffing, DoS and MITM attacks and cryptography stripping.</span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='flex-auto rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64 reversing'/>
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Reverse Engineering</span>
                <span className='text-gray-800 text-base'>
                  This area studies assembly languages, computer architectures, reverse engineering techniques, malwares and low level linux systems.
                </span>
              </div>
            </div>
          </li>
          <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
            <div className='flex-auto rounded shadow-md bg-white mx-4'>
              <div className='border-gray-700 border-4 rounded-t h-64' />
              <div className='flex flex-col my-2 mx-4'>
                <span className='text-gray-800 text-lg'>Web Security</span>
                <span className='text-gray-800 text-base'>This group studies web vulnerabilities, attack methods, counter measures and mitigation in web services implementations and architetures.</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
        .reversing {
          background-image: url(/static/images/rev.jpg);
        }
        .networking {
          background-image: url(/static/images/networking.jpg);
        }
        .cryptography {
          background-image: url(/static/images/cripto.jpg);
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Fronts;

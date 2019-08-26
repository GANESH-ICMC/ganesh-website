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
      <style jsx>{``}</style>
      <p>
        {/* Todo
        The research and development of the group is organized in four big study areas.
        They are: Reverse Engineering, Networking, Web Security and Cryptography.
         */}
      </p>
      
    </main>
    <Footer />
  </React.Fragment>
);

export default Fronts;

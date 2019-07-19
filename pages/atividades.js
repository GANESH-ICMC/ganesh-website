import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar';
import Footer from '../shared/components/footer';

const Activities = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Atividades"
      description="Grupo de extensão focado em segurança da informação."
    />
    <Navbar />
    <main>
      <h1>Activities</h1>
      <style jsx>{``}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Activities;

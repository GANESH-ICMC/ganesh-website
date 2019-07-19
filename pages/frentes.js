import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar';
import Footer from '../shared/components/footer';

const Fronts = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Frentes"
      description="Grupo de extensão focado em segurança da informação."
    />
    <Navbar />
    <main>
      <h1>Fronts</h1>
      <style jsx>{``}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Fronts;

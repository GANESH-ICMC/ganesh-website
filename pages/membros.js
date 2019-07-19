import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar';
import Footer from '../shared/components/footer';

const Members = () => (
  <React.Fragment>
    <Head
      title="Ganesh - Membros"
      description="Grupo de extensão focado em segurança da informação."
    />
    <Navbar />
    <main>
      <h1>Members</h1>
      <style jsx>{``}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Members;

import React from 'react';
import Layout from '/components/Layout'; // Pastikan path-nya benar

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

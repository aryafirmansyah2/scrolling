import Head from 'next/head';
import React from 'react';
// component
import Layout from '@/components/Layout/Layout';
import ListWork from '@/components/Work/ListWork';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Inagata Landingpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ListWork />
      </Layout>
    </>
  );
};

export default Contact;

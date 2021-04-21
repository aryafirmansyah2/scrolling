import Collaboration from '@/components/Contact/Collaboration';
import HeroContact from '@/components/Contact/HeroContact';
import Identity from '@/components/Contact/Identity';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import React from 'react';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Inagata Landingpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroContact />
        <Identity />
        <Collaboration />
      </Layout>
    </>
  );
};

export default Contact;

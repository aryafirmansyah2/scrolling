import Head from 'next/head';
import React from 'react';

import Collaboration from '@/components/Contact/Collaboration';
import HeroContact from '@/components/Contact/HeroContact';
import Identity from '@/components/Contact/Identity';
import CallToAction from '@/components/Home/CallToAction';
import Layout from '@/components/Layout/Layout';

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
        <CallToAction />
      </Layout>
    </>
  );
};

export default Contact;
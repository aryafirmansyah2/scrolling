import CallToAction from '@/components/Home/CallToAction';
import Layout from '@/components/Layout/Layout';
import HeroTeam from '@/components/Team/HeroTeam';
import ListTeam from '@/components/Team/ListTeam';
import Head from 'next/head';
import React from 'react';

const Team = () => {
  return (
    <>
      <Head>
        <title>Inagata Landingpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroTeam />
        <ListTeam />
        <CallToAction />
      </Layout>
    </>
  );
};

export default Team;

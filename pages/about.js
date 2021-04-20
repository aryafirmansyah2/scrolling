import 'twin.macro';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import HeroAbout from '@/components/About/HeroAbout';
import Describtion from '@/components/About/Describtion';
import OurCapability from '@/components/About/OurCapability';
import Partner from '@/components/About/Partner';
import CallToAction from '@/components/Home/CallToAction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inagata Landingpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroAbout />
        <Describtion />
        <OurCapability />
        <Partner />
        <CallToAction />
      </Layout>
    </>
  );
}

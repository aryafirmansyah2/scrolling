import tw from 'twin.macro';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import CaseStudy from '@/components/Home/CaseStudy';
import StimulusAds from '@/components/Home/StimulusAds';
import CallToAction from '@/components/Home/CallToAction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inagata Landingpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <CaseStudy />
        <section tw="w-full h-screen flex flex-col">
          <StimulusAds />
          <CallToAction />
        </section>
      </Layout>
    </>
  );
}

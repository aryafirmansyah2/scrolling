import 'twin.macro';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Hero from '@/components/Home/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inagata Landingpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}

import tw from 'twin.macro';

import Layout from '../components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import CaseStudy from '@/components/Home/CaseStudy';
import StimulusAds from '@/components/Home/StimulusAds';
import CallToAction from '@/components/Home/CallToAction';

import FooterHome from '@/components/Home/FooterHome';
import { Metahead } from '@/components/Metahead';

export default function Home() {
  return (
    <>
      <Metahead title="Inagata Technosmith | Homepage" />
      <Layout>
        <main>
          <Hero />
          <CaseStudy />
          <section tw="h-screen flex flex-col pt-20 lg:pt-10">
            <StimulusAds show={true} />
            <CallToAction />
            <FooterHome />
          </section>
        </main>
      </Layout>
    </>
  );
}

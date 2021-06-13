import 'twin.macro';

import Layout from '@/components/Layout/Layout';
import HeroAbout from '@/components/About/HeroAbout';
import Describtion from '@/components/About/Describtion';
import OurCapability from '@/components/About/OurCapability';
import Partner from '@/components/About/Partner';
import CallToAction from '@/components/Home/CallToAction';
import { Metahead } from '@/components/Metahead';
import StimulusAds from '@/components/Home/StimulusAds';

export default function Home() {
  return (
    <>
      <Metahead title="Inagata Technosmith | Aboutpage" />
      <Layout>
        <HeroAbout />
        <Describtion />
        <OurCapability />
        <Partner />
        <StimulusAds show={false} />
        <CallToAction />
      </Layout>
    </>
  );
}

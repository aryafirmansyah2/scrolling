import React from 'react';

import Collaboration from '@/components/Contact/Collaboration';
import HeroContact from '@/components/Contact/HeroContact';
import Identity from '@/components/Contact/Identity';
import CallToAction from '@/components/Home/CallToAction';
import Layout from '@/components/Layout/Layout';
import { Metahead } from '@/components/Metahead';
import StimulusAds from '@/components/Home/StimulusAds';

const Contact = () => {
  return (
    <>
      <Metahead title="Inagata Technosmith | Contact Page" />
      <Layout>
        <HeroContact />
        <Identity />
        <Collaboration />
        <StimulusAds show={false} />
        <CallToAction />
      </Layout>
    </>
  );
};

export default Contact;

import React from 'react';
// component
import Layout from '@/components/Layout/Layout';
import ListWork from '@/components/Work/ListWork';
import CallToAction from '@/components/Home/CallToAction';
import { Metahead } from '@/components/Metahead';
import StimulusAds from '@/components/Home/StimulusAds';

const Contact = () => {
  return (
    <>
      <Metahead title="Inagata Technosmith | Portofolio Page" />
      <Layout>
        <ListWork />
        <StimulusAds show={false} />
        <CallToAction />
      </Layout>
    </>
  );
};

export default Contact;

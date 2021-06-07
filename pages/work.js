import React from 'react';
// component
import Layout from '@/components/Layout/Layout';
import ListWork from '@/components/Work/ListWork';
import CallToAction from '@/components/Home/CallToAction';
import { Metahead } from '@/components/Metahead';

const Contact = () => {
  return (
    <>
      <Metahead title="Inagata Technosmith | Portofolio Page" />
      <Layout>
        <ListWork />
        <CallToAction />
      </Layout>
    </>
  );
};

export default Contact;

import CallToAction from '@/components/Home/CallToAction';
import StimulusAds from '@/components/Home/StimulusAds';
import Layout from '@/components/Layout/Layout';
import { Metahead } from '@/components/Metahead';
import HeroTeam from '@/components/Team/HeroTeam';
import ListTeam from '@/components/Team/ListTeam';

import React from 'react';

const Team = () => {
  return (
    <>
      <Metahead title="Inagata Technosmith | Teampage" />
      <Layout>
        <HeroTeam />
        <ListTeam />
        <StimulusAds show={false} />
        <CallToAction />
      </Layout>
    </>
  );
};

export default Team;

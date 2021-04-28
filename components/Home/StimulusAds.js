import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';

const Section = tw.section`w-full bg-white relative z-10`;
const WrapTitle = tw.div`w-full lg:w-6/12 mx-auto mt-20 mb-12`;
const Title = tw.h2`font-bold text-5xl leading-normal text-black font-woodland text-center`;
const StimulusAds = () => {
  return (
    <Section id="stimulus-ads">
      <Container>
        <WrapTitle>
          <Title>come with us to create your digital experience</Title>
        </WrapTitle>
      </Container>
    </Section>
  );
};

export default StimulusAds;

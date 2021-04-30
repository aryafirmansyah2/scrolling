import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';

const Section = styled.div`
  ${tw`w-full bg-white relative z-10`}
  ${css`
    height: 70vh;
  `}
`;
const WrapTitle = tw.div`w-full h-full flex justify-center items-center`;
const Title = tw.h2`font-bold text-5xl leading-normal text-black font-woodland text-center`;
const StimulusAds = () => {
  return (
    <Section id="stimulus-ads">
      <Container tw="h-full">
        <WrapTitle>
          <Title>come with us to create your digital experience</Title>
        </WrapTitle>
      </Container>
    </Section>
  );
};

export default StimulusAds;

import useResponsive from '@/utils/useResponsive';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';

const Section = styled.div`
  ${tw`w-full bg-white relative z-10`}/* ${css`
    height: 70vh;
  `} */
`;
const WrapTitle = tw.div`w-full h-full flex justify-center items-center py-8 mt-4 sm:(py-16 mt-12) lg:mt-0`;
const Title = tw.h2`font-bold text-2xl sm:text-5xl leading-normal text-black font-woodland text-center`;
const StimulusAds = () => {
  const { isDekstop } = useResponsive();
  return (
    <Section id="stimulus-ads">
      <Container>
        <WrapTitle>
          {isDekstop ? (
            <Title>come with us to create your digital experience</Title>
          ) : (
            <Title>Ready to Collaboration?</Title>
          )}
        </WrapTitle>
      </Container>
    </Section>
  );
};

export default StimulusAds;

import useResponsive from '@/utils/useResponsive';
import { motion } from 'framer-motion';
import React from 'react';
import { InView } from 'react-intersection-observer';
import tw, { styled, css } from 'twin.macro';
import FadeInBottom from '../Animations/FadeInBottom';
import Container from '../Common/Container';

const Section = styled.div`
  ${tw`w-full bg-white relative z-10 flex`}
  ${css`
    @media screen and (min-width: 1500px) {
      min-height: 30vh;
    }
  `} /* ${css`
    height: 70vh;
  `} */
`;
const WrapTitle = tw.div`w-full h-full flex justify-center items-center py-8 mt-4 sm:(py-16 mt-12) lg:mt-0`;
const Title = tw(motion.h2)`font-bold text-2xl sm:text-5xl leading-normal text-black font-woodland text-center`;
const StimulusAds = ({ show }) => {
  const { isDekstop } = useResponsive();

  return (
    <Section id="stimulus-ads">
      <Container tw="my-auto">
        <InView>
          {(inView, ref) => (
            <WrapTitle ref={ref} css={[show ? tw`block ` : tw`block xl:hidden`]}>
              {isDekstop ? (
                <Title variants={FadeInBottom} animate={inView && 'show'} initial="hidden">
                  come with us to create your digital experience
                </Title>
              ) : (
                <Title variants={FadeInBottom} animate={inView && 'show'} initial="hidden">
                  Ready to Collaboration?
                </Title>
              )}
            </WrapTitle>
          )}
        </InView>
      </Container>
    </Section>
  );
};

export default StimulusAds;

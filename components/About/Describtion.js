import { motion } from 'framer-motion';
import React from 'react';
import { InView } from 'react-intersection-observer';
import tw from 'twin.macro';
import FadeInBottom from '../Animations/FadeInBottom';
import FadeInLeft from '../Animations/FadeInLeft';
import FadeInRight from '../Animations/FadeInRight';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = tw.section`w-full bg-black pt-9 pb-20 sm:py-28`;
const WrapTitle = tw.div`col-span-full py-16`;
const Title = tw(motion.h1)`text-5xl sm:text-8xl text-white-opacity-50 text-center`;
const WrapSubtitle = tw.div`col-span-full lg:col-span-5`;
const Subtitle = tw(motion.p)`text-lg sm:text-2xl text-white text-left opacity-75`;
const Describtion = () => {
  return (
    <Section id="hero-about">
      <Container>
        <Grid>
          <InView>
            {({ inView, ref }) => (
              <WrapTitle ref={ref}>
                <Title variants={FadeInBottom} animate={inView && 'show'} initial="hidden">
                  We believe in the technology as a medium of <strong tw="text-white font-semibold">outstanding interaction</strong>. It has the power to <strong tw="text-white font-semibold">influence </strong> people in many ways, and that is the{' '}
                  <strong tw="text-white font-semibold"> reason </strong> for our existence. Helping you grow, becoming expressing <strong tw="text-white font-semibold"> sincere </strong> digital experience.
                </Title>
              </WrapTitle>
            )}
          </InView>
          <InView>
            {({ inView, ref }) => (
              <>
                <WrapSubtitle tw="lg:col-start-2" ref={ref}>
                  <Subtitle variants={FadeInLeft} animate={inView && 'show'} initial="hidden">
                    Our team is proficient in a variety of services that can help improve productivity of your company or institution. With our ability to produce websites, mobile aps and ios aps we will{' '}
                  </Subtitle>
                </WrapSubtitle>
                <WrapSubtitle tw="lg:col-end-12">
                  <Subtitle variants={FadeInRight} animate={inView && 'show'} initial="hidden">
                    help solve your problem with good and useful products. Let’s talk about how our services can add value to your company.
                  </Subtitle>
                </WrapSubtitle>
              </>
            )}
          </InView>
        </Grid>
      </Container>
    </Section>
  );
};

export default Describtion;

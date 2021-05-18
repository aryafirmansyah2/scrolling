import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import TextBody from '../Typography/TextBody';
import HeadingThree from '../Typography/HeadingThree';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import StaggerChild from '../Animations/StaggerChild';
import FadeInTop from '../Animations/FadeInTop';
import FadeInBottom from '../Animations/FadeInBottom';
import FadeInLeft from '../Animations/FadeInLeft';

const Section = tw.section`w-full bg-white text-black min-h-screen flex py-20 sm:py-28`;
const WrapTitle = tw(motion.div)`col-span-full py-7 sm:py-16 flex flex-col`;
const Title = tw(motion.h1)`text-4xl sm:text-8xl text-brown-500 text-center font-woodland font-bold mb-14`;

const Paragraf = tw(TextBody)` text-2xl sm:text-2.5xl text-center w-full lg:w-10/12 mx-auto`;

const WrapSubtitle = tw(motion.div)`col-span-full grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-16`;
const FlexColumn = tw.div`flex flex-col`;
const Subtitle = tw(motion.p)`text-lg sm:text-2xl  text-left `;
const HeadingCapability = tw(HeadingThree)`mb-5`;
const OurCapability = () => {
  return (
    <Section id="capability">
      <Container tw="my-auto">
        <Grid>
          <InView>
            {({ inView, ref }) => (
              <WrapTitle ref={ref} variants={StaggerChild} animate={inView && 'show'} initial="hidden">
                <Title variants={FadeInTop}>Our Capability</Title>
                <Paragraf isNormalLight variants={FadeInBottom}>
                  We combine insights, and craft to articulate your values. Designing an authentic space of expression that is incredible throughout possible touchpoints, with user behavior fundamental and experience development approaches. From content to interactions.
                </Paragraf>
              </WrapTitle>
            )}
          </InView>
          <InView>
            {({ inView, ref }) => (
              <WrapSubtitle ref={ref} variants={StaggerChild} animate={inView && 'show'} initial="hidden">
                <FlexColumn>
                  <HeadingCapability isCommonMedium tw="text-2xl sm:text-4xl" variants={FadeInLeft}>
                    Development Solutions
                  </HeadingCapability>
                  <Subtitle variants={FadeInLeft}>Development Consulting, Front-end, Back-end Development, Development, CMS Development, Android Develompment, Support and Maintenance</Subtitle>
                </FlexColumn>
                <FlexColumn>
                  <HeadingCapability isCommonMedium tw="text-2xl sm:text-4xl" variants={FadeInLeft}>
                    Discover & Strategy
                  </HeadingCapability>
                  <Subtitle variants={FadeInLeft}>Requirement analysis, feature analysis, system requirements, system development strategies, and Experience Strategy, Production Planning.</Subtitle>
                </FlexColumn>
                <FlexColumn>
                  <HeadingCapability isCommonMedium tw="text-2xl sm:text-4xl" variants={FadeInLeft}>
                    Interactive
                  </HeadingCapability>
                  <Subtitle variants={FadeInLeft}>Content Strategy, User Experience, Interface Design, Content Design, Wireframing and Prototyping, Visual Design, Responsive Design, UI Kits and Pattern Libraries.</Subtitle>
                </FlexColumn>
              </WrapSubtitle>
            )}
          </InView>
        </Grid>
      </Container>
    </Section>
  );
};

export default OurCapability;

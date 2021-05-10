import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingThree from '../Typography/HeadingThree';

import IconCombinedShape from '@/assets/icon/combined-shape.svg';
import IconArrow from '@/assets/icon/arrow-fill-down.svg';
import HeadingFour from '../Typography/HeadingFour';
import HeadingFive from '../Typography/HeadingFive';
import useResponsive from '@/utils/useResponsive';
import StaggerChild from '../Animations/StaggerChild';
import FadeInLeft from '../Animations/FadeInLeft';
import FadeInBottom from '../Animations/FadeInBottom';
import FadeIn from '../Animations/FadeIn';

const Section = tw.section`h-screen w-full bg-white relative z-10`;
const Caption = tw.div`col-span-full lg:col-span-9 col-start-1 row-start-1 flex flex-col `;
const WrapTitle = tw(motion.div)`flex flex-col w-full mt-52 sm:mt-64`;

const Subtitle = tw(HeadingThree)`text-2xl sm:text-4xl text-black opacity-75 leading-6 font-common font-light`;
const Title = styled(motion.h1)`
  ${tw`text-5xl sm:text-8.5xl lg:text-10xl leading-none text-black font-common font-bold mt-5 z-10`}
`;
const Outline = styled.span`
  ${css`
    color: black;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  `}
`;

const WrapService = tw.div`h-full lg:h-auto col-span-full flex flex-col items-start justify-start mt-auto`;
const Service = tw(motion.div)`flex items-start justify-start`;
const Work = tw(motion.div)`bg-black-200 rounded-2xl p-3 mr-4 sm:(p-4 mr-7)  `;
const ServiceCaption = tw(HeadingFour)`text-black`;
const WrapButton = tw(motion.div)`mt-auto lg:mt-0 w-full flex items-start justify-end`;
const ButtonDown = tw.div`w-64 h-20 relative flex flex-col  items-center justify-end sm:justify-center`;
const ImgButton = tw(motion.img)`absolute bottom-0 left-0 right-0 w-full`;

const ImgCircleBg = styled.img`
  ${tw`absolute h-auto`}
  ${css`
    top: -40%;
    height: auto;
    right: -30%;
  `}
`;

const Hero = () => {
  const { isMobile, isOnlyMobile } = useResponsive();
  return (
    <Section id="hero-scroll">
      <Container tw="flex h-full relative">
        <ImgCircleBg src="/assets/pattern/home/bg-hero.png" />
        <img src="/assets/pattern/home/bg-hero-circle.svg" tw="absolute top-36 bottom-0 -right-80 lg:(bottom-0 -right-36 top-6)" alt="" />
        <img src="/assets/pattern/home/eclipse-triple.svg" tw="absolute h-20 right-32 animate-bounce-slow sm:(h-auto right-28) bottom-40 lg:(bottom-1/3 right-24)" alt="" />
        <Grid>
          <Caption>
            <WrapTitle variants={StaggerChild} animate="show" initial="hidden">
              <Subtitle isCommonLight variants={FadeInLeft}>
                7th year celebration.
              </Subtitle>
              <Title variants={FadeInLeft}>
                Make your digital experience grow soulfully
                <Outline> to the next level</Outline>
              </Title>
            </WrapTitle>
            {isOnlyMobile && (
              <Service tw=" mt-9" variants={StaggerChild} animate="show" initial="hidden">
                <Work variants={FadeInBottom}>
                  <IconCombinedShape tw="h-5 w-5 sm:(h-9 w-9)" />
                </Work>
                <ServiceCaption isCommon variants={FadeInBottom}>
                  Website Development / Mobile Development / <br /> Visual Design
                </ServiceCaption>
              </Service>
            )}
          </Caption>
          <WrapService>
            {isMobile && (
              <Service variants={StaggerChild} animate="show" initial="hidden">
                <Work variants={FadeInBottom}>
                  <IconCombinedShape tw="h-5 w-5 sm:(h-9 w-9)" />
                </Work>
                <ServiceCaption isCommon variants={FadeInBottom}>
                  Website Development / Mobile Development / <br /> Visual Design
                </ServiceCaption>
              </Service>
            )}

            <WrapButton variants={StaggerChild} animate="show" initial="hidden">
              <ButtonDown>
                <ImgButton variants={FadeIn} src="/assets/pattern/subtract.png" tw="h-16 sm:h-20 w-full" />
                <IconArrow as={motion.svg} variants={FadeIn} tw="h-5 w-5 sm:(h-6 w-6) fill-current text-white z-10 animate-bounce" />
                <HeadingFive isRegular variants={FadeIn} tw="text-sm mb-1 sm:(text-lg mb-0) z-10 text-white mt-2 ">
                  Scroll Down
                </HeadingFive>
              </ButtonDown>
            </WrapButton>
          </WrapService>
        </Grid>
      </Container>
    </Section>
  );
};

export default Hero;

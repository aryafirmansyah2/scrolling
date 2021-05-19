import useResponsive from '@/utils/useResponsive';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import FadeInBottom from '../Animations/FadeInBottom';
import StaggerChild from '../Animations/StaggerChild';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import Outline from '../Common/Outline';
import HeadingOne from '../Typography/HeadingOne';
import TextBody from '../Typography/TextBody';

const Section = tw.section`bg-white w-full h-screen lg:(min-h-screen h-full) xl:h-screen flex`;
const Caption = tw(motion.div)`flex z-10 flex-col col-span-full row-start-2 pb-12 lg:(row-start-2 col-span-8) xl:(col-span-6 row-start-1) justify-end `;
const Title = tw(HeadingOne)`text-black font-bold  text-7xl leading-none w-full sm:(text-9.5xl leading-tight w-10/12) lg:(leading-none w-full)  xl:(w-full leading-normal)`;
const Subtitle = tw(TextBody)`text-base sm:text-2xl text-black opacity-75   w-full lg:(w-10/12 mt-7)`;
const ImgHero = styled.div`
  ${tw`col-span-8 col-end-13  xl:(col-span-6 row-start-1) overflow-hidden relative`}
  ${css`
    height: 40vh;
    @media only screen and (min-width: 768px) {
      height: 60vh;
    }
    @media only screen and (min-width: 1024px) {
      height: 60vh;
    }
  `}
`;
const Img = tw(Image)`h-full w-full object-cover animate-bounce-slow`;

const HeroContact = () => {
  const { isDekstop } = useResponsive();
  console.log('Dekstop ', isDekstop);
  return (
    <Section id="hero-contact">
      <Container tw="relative flex">
        {isDekstop ? <img src="/assets/pattern/contact/eclipse.svg" tw="absolute top-0 -left-20 xl:left-0 " /> : <img src="/assets/pattern/contact/tablet/eclipse.svg" tw="absolute -top-10 left-0" />}

        <Grid tw=" my-10 lg:my-20 xl:my-auto">
          <Caption variants={StaggerChild} animate="show" initial="hidden">
            <Title isCommon variants={FadeInBottom}>
              Realize Your Unlimited <Outline>Matters</Outline>{' '}
            </Title>
            <Subtitle isNormal variants={FadeInBottom}>
              Regardless of simple or complicated, emerging or established, we'll greet you humbly. Let's grow together and make a dent in this space and time.
            </Subtitle>
          </Caption>
          <ImgHero>
            <Img src="/assets/content/hero-contact-1.png" layout="fill" objectFit="contain" quality={100} />
          </ImgHero>
        </Grid>
      </Container>
    </Section>
  );
};

export default HeroContact;

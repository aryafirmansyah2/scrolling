import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

import IconLike from '@/assets/icon/like.svg';
import IconArrow from '@/assets/icon/arrow-fill-down.svg';

import TextBody from '../Typography/TextBody';
import HeadingFive from '../Typography/HeadingFive';
import listCase from '@/data/listCase';
import Link from 'next/link';
import useResponsive from '@/utils/useResponsive';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import StaggerChild from '../Animations/StaggerChild';
import FadeInBottom from '../Animations/FadeInBottom';
import FadeInLeft from '../Animations/FadeInLeft';

const Section = styled.section(props => [tw`relative w-full h-screen bg-white bg-no-repeat bg-cover `]);
const Caption = tw(motion.div)`col-span-full lg:col-span-7 flex flex-col my-auto row-start-1`;
const LikeProject = tw.div`flex items-center w-full mt-0 mb-12 lg:(mb-20)`;
const Circle = tw(motion.span)`rounded-full bg-blue-700 mr-4 p-2 sm:p-3 lg:(p-4)`;
const WrapCase = tw.div`flex flex-col w-full items-start `;
const Subtitle = tw(motion.p)`text-2xl sm:text-4xl leading-9  font-light mb-2 opacity-75`;
const Title = tw(motion.h1)`font-normal text-2xl sm:text-8.5xl font-common leading-relaxed`;
const ButtonOutline = tw.a`w-72 h-14 border text-2xl mb-6 sm:(text-xl mb-0 mt-6) lg:(text-2xl mt-12) rounded-2xl  py-3 px-11   font-normal`;

const HeroImg = tw.div`col-span-full row-start-2 w-full  lg:(col-span-6 row-start-1 w-auto) flex flex-col h-auto  relative z-0`;
const ImgItem = styled(motion.div)`
  ${tw`w-7/12 ml-auto mt-auto mb-16 lg:(w-full ml-0 my-auto) relative animate-bounce-fast object-cover overflow-hidden`}
  ${css`
    height: 20rem;
    @media only screen and (min-width: 1024px) {
      height: 25rem;
    }
  `}
`;
const Img = tw.img`w-full h-full`;
const BgColor = styled.div(props => [
  tw`absolute bottom-0 -right-10 w-full lg:(top-10 -right-4 w-10/12)  rounded-2xl`,
  css`
    background-color: ${props.bgColor};
    height: 20vh;
    @media only screen and (min-width: 1024px) {
      height: 90vh;
    }
  `,
]);
const ButtonDown = tw.button`w-auto h-14 mr-14 cursor-pointer sm:(absolute mx-auto bottom-0 right-0 ) flex flex-col items-center justify-center  lg:(bottom-14 right-20 w-64 h-20) `;
// Mobile
const NavBottom = tw.div` w-full flex items-center justify-center z-10`;
const MobileBgColor = styled.div(props => [
  tw`absolute bottom-0 left-0 right-0 w-screen px-8 sm:hidden rounded-tl-3xl`,
  css`
    height: 25vh;
    background-color: ${props.bgColor};
  `,
]);
const Flexbox = tw.div`flex flex-col  justify-end items-end w-full h-full `;
const ImageProject = styled(motion.img)`
  ${tw`relative z-10 col-span-full mt-9 animate-bounce-fast`}
  ${css`
    min-height: 200px;
  `}
`;
const CaseStudy = (props) => {
  const { isMobile, isOnlyMobile } = useResponsive();
  return (
    <>
      <Section color="hsla(29,35%,38%,1)" id={props.id + ' scroll'} ref={props.refProp} >
        <Container tw="h-full relative">
          <img src="/assets/pattern/home/bg-hero-circle-black.svg" tw="absolute top-20 -right-1/2 lg:(bottom-0 right-0 top-6)" alt="" />
          <img src="/assets/pattern/home/eclipse-triple.svg" tw="hidden lg:block absolute right-44 top-3/4 animate-bounce-slow z-10 h-20" alt="" />
          <Grid tw="h-full ">
            <InView>
              {({ inView, ref }) => (
                <Caption ref={ref} variants={StaggerChild} animate={inView && 'show'} initial="hidden">
                  <LikeProject>
                    <Circle variants={FadeInBottom}>
                      <IconLike tw="h-3 w-3 sm:(h-4 w-4)" />
                    </Circle>
                    <TextBody isNormal variants={FadeInBottom}>
                      *Don't forget to like this project on <strong tw="text-blue-700 font-semibold">behance</strong>
                    </TextBody>
                  </LikeProject>
                  <WrapCase>
                    <Subtitle tw="text-black" variants={FadeInLeft}>
                      {props.company}
                    </Subtitle>
                    <Title isCommon tw="text-black font-bold leading-tight" variants={FadeInLeft}>
                      {props.name}
                    </Title>
                    {isMobile && (
                      <ButtonOutline href={props.behance} target="_blank" tw="text-black border-black" as={motion.button} variants={FadeInLeft}>
                        Read on behance
                      </ButtonOutline>
                    )}
                  </WrapCase>
                  {isOnlyMobile && <ImageProject loading="lazy" src={props.img} alt={props.name} />}
                </Caption>
              )}
            </InView>

            {isMobile && (
              <HeroImg>
                <BgColor bgColor={props.color} />
                <ImgItem>
                  <Img src={props.img} alt={props.name} loading="lazy" />
                </ImgItem>
                <ButtonDown onClick={props.Click}>
                  <IconArrow tw="h-6 w-6 fill-current text-black z-10 animate-bounce" />
                  <HeadingFive isRegular tw="z-10 text-black mt-2">
                    Scroll Down
                  </HeadingFive>
                </ButtonDown>
              </HeroImg>
            )}
          </Grid>
        </Container>
        {isOnlyMobile && (
          <MobileBgColor bgColor={props.color}>
            <Flexbox>
              <NavBottom>
                <Link href={props.behance} passHref>
                  <ButtonOutline tw="text-black border-black">Read on behance</ButtonOutline>
                </Link>
              </NavBottom>
              <ButtonDown onClick={props.Click}>
                <IconArrow tw="h-4 w-4 sm:(h-6 w-6) fill-current text-black z-10" />
                <HeadingFive isRegular tw="text-sm sm:text-lg z-10 text-black mt-2">
                  Scroll Down
                </HeadingFive>
              </ButtonDown>
            </Flexbox>
          </MobileBgColor>
        )}
      </Section>
    </>
  );
};

export default CaseStudy;

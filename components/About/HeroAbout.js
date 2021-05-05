import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import useResponsive from '@/utils/useResponsive';

import HeadingFour from '../Typography/HeadingFour';
import HeadingThree from '../Typography/HeadingThree';
import Image from 'next/image';

const Section = tw.section`h-screen w-full relative bg-white`;
const WrapExperience = tw.div`col-span-full row-start-1`;
const WrapTitle = tw.div`col-span-full lg:col-span-7 flex flex-col h-full justify-end`;
const Title = tw.h1`font-bold font-common text-10xl leading-none lg:mt-28 text-black`;
const Service = tw.div`flex items-end mb-12 lg:(items-center mb-0)`;
const Work = tw.div`bg-black-200 rounded-2xl p-4  mr-7`;
const ServiceCaption = tw(HeadingFour)`text-black`;
const Outline = styled.strong`
  ${css`
    color: black;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  `}
`;

const WrapImg = tw.div`col-span-4 col-end-13 flex `;
const ImgContainer = styled.div`
  ${tw`w-full relative my-auto`}
  ${css`
    height: auto;
    min-height: 26rem;
  `}
`;
const Img = tw(Image)``;
const HeroAbout = () => {
  const { isOnlyMobile, isDekstop, isMobile } = useResponsive();
  return (
    <Section id="about">
      <Container tw="h-full relative">
        {isMobile ? (
          <>
            {' '}
            <img src="/assets/pattern/about/eclipse.svg" tw="absolute bottom-0 -right-36 top-0" alt="" />
            <img src="/assets/pattern/about/bg.svg" tw="absolute left-48 -top-2 " alt="" />
          </>
        ) : (
          <img src="/assets/pattern/about/eclipse-full.svg" tw="absolute -left-20 top-10 " alt="" />
        )}

        <Grid tw="pt-44 pb-24 lg:py-24 h-full">
          {isDekstop ? null : (
            <>
              <Service tw="col-span-6 row-start-1">
                <Work>
                  <svg
                    tw="h-6 w-6 fill-current text-white"
                    viewBox="0 0 35 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5723 11.5137C14.5723 10.1191 14.4082 8.89453 14.0801 7.83984C13.7637 6.78516 13.3418 5.90625 12.8145 5.20312C12.2871 4.48828 11.6836 3.95508 11.0039 3.60352C10.3359 3.24023 9.66797 3.05859 9 3.05859C8.33203 3.05859 7.6582 3.24023 6.97852 3.60352C6.31055 3.95508 5.71289 4.48828 5.18555 5.20312C4.6582 5.90625 4.23047 6.78516 3.90234 7.83984C3.57422 8.89453 3.41016 10.1191 3.41016 11.5137C3.41016 12.9082 3.57422 14.1328 3.90234 15.1875C4.23047 16.2422 4.6582 17.127 5.18555 17.8418C5.71289 18.5449 6.31055 19.0781 6.97852 19.4414C7.64648 19.793 8.32031 19.9688 9 19.9688C9.66797 19.9688 10.3359 19.793 11.0039 19.4414C11.6836 19.0781 12.2871 18.5449 12.8145 17.8418C13.3418 17.127 13.7637 16.2422 14.0801 15.1875C14.4082 14.1328 14.5723 12.9082 14.5723 11.5137ZM18 11.5137C18 13.3652 17.7598 15.0059 17.2793 16.4355C16.7988 17.8535 16.1426 19.0547 15.3105 20.0391C14.4785 21.0234 13.5234 21.7676 12.4453 22.2715C11.3672 22.7754 10.2188 23.0273 9 23.0273C7.78125 23.0273 6.62695 22.7754 5.53711 22.2715C4.45898 21.7676 3.50391 21.0234 2.67188 20.0391C1.85156 19.0547 1.20117 17.8535 0.720703 16.4355C0.240234 15.0059 0 13.3652 0 11.5137C0 9.66211 0.240234 8.02148 0.720703 6.5918C1.20117 5.16211 1.85156 3.96094 2.67188 2.98828C3.50391 2.00391 4.45898 1.25977 5.53711 0.755859C6.61523 0.251953 7.76953 0 9 0C10.2188 0 11.3672 0.251953 12.4453 0.755859C13.5234 1.25977 14.4785 2.00391 15.3105 2.98828C16.1426 3.96094 16.7988 5.16211 17.2793 6.5918C17.7598 8.02148 18 9.66211 18 11.5137Z"
                      fill="white"
                    />
                    <path
                      d="M34.0137 0.175781V2.51367L24.6445 22.8516H21.041L30.041 3.41016H19.793V0.175781H34.0137Z"
                      fill="white"
                    />
                  </svg>
                </Work>
                <ServiceCaption isCommon>
                  Years of <br />
                  combined experiences
                </ServiceCaption>
              </Service>
              <WrapImg tw="col-span-6 row-start-1">
                <ImgContainer>
                  <Img src="/assets/content/hero-about-1.png" layout="fill" objectFit="contain" quality={100} />
                </ImgContainer>
              </WrapImg>
            </>
          )}
          <WrapTitle>
            {isDekstop && (
              <Service>
                <Work>
                  <svg
                    tw="h-6 w-6 fill-current text-white"
                    viewBox="0 0 35 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5723 11.5137C14.5723 10.1191 14.4082 8.89453 14.0801 7.83984C13.7637 6.78516 13.3418 5.90625 12.8145 5.20312C12.2871 4.48828 11.6836 3.95508 11.0039 3.60352C10.3359 3.24023 9.66797 3.05859 9 3.05859C8.33203 3.05859 7.6582 3.24023 6.97852 3.60352C6.31055 3.95508 5.71289 4.48828 5.18555 5.20312C4.6582 5.90625 4.23047 6.78516 3.90234 7.83984C3.57422 8.89453 3.41016 10.1191 3.41016 11.5137C3.41016 12.9082 3.57422 14.1328 3.90234 15.1875C4.23047 16.2422 4.6582 17.127 5.18555 17.8418C5.71289 18.5449 6.31055 19.0781 6.97852 19.4414C7.64648 19.793 8.32031 19.9688 9 19.9688C9.66797 19.9688 10.3359 19.793 11.0039 19.4414C11.6836 19.0781 12.2871 18.5449 12.8145 17.8418C13.3418 17.127 13.7637 16.2422 14.0801 15.1875C14.4082 14.1328 14.5723 12.9082 14.5723 11.5137ZM18 11.5137C18 13.3652 17.7598 15.0059 17.2793 16.4355C16.7988 17.8535 16.1426 19.0547 15.3105 20.0391C14.4785 21.0234 13.5234 21.7676 12.4453 22.2715C11.3672 22.7754 10.2188 23.0273 9 23.0273C7.78125 23.0273 6.62695 22.7754 5.53711 22.2715C4.45898 21.7676 3.50391 21.0234 2.67188 20.0391C1.85156 19.0547 1.20117 17.8535 0.720703 16.4355C0.240234 15.0059 0 13.3652 0 11.5137C0 9.66211 0.240234 8.02148 0.720703 6.5918C1.20117 5.16211 1.85156 3.96094 2.67188 2.98828C3.50391 2.00391 4.45898 1.25977 5.53711 0.755859C6.61523 0.251953 7.76953 0 9 0C10.2188 0 11.3672 0.251953 12.4453 0.755859C13.5234 1.25977 14.4785 2.00391 15.3105 2.98828C16.1426 3.96094 16.7988 5.16211 17.2793 6.5918C17.7598 8.02148 18 9.66211 18 11.5137Z"
                      fill="white"
                    />
                    <path
                      d="M34.0137 0.175781V2.51367L24.6445 22.8516H21.041L30.041 3.41016H19.793V0.175781H34.0137Z"
                      fill="white"
                    />
                  </svg>
                </Work>
                <ServiceCaption isCommon>
                  Years of <br />
                  combined experiences
                </ServiceCaption>
              </Service>
            )}
            <Title>
              We are a digital product design <br /> <Outline>agency.</Outline>
            </Title>
            <HeadingThree isCommonMedium tw="opacity-75">
              Let’s collaborate with us
            </HeadingThree>
          </WrapTitle>
          {isDekstop && (
            <WrapImg>
              <ImgContainer>
                <Img src="/assets/content/hero-about-1.png" layout="fill" objectFit="contain" quality={100} />
              </ImgContainer>
            </WrapImg>
          )}
        </Grid>
      </Container>
    </Section>
  );
};

export default HeroAbout;

import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Image from 'next/image';

import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = tw.section`h-screen w-full bg-gray-100`;
const Caption = tw.div`col-span-8 col-start-1 row-start-1 flex flex-col`;
const WrapTitle = tw.div`flex flex-col w-full my-auto`;
const WrapImgHero = tw.div`col-span-5 col-end-13 row-start-1 `;
const ImgHero = styled.div`
  ${tw`w-full relative`}
  ${css`
    height: 70vh;
  `}
`;
const Subtitle = tw.h5`text-4xl text-white opacity-75 leading-6`;
const Title = tw.h1`text-7xl leading-normal text-white`;

const ImageNext = tw(Image)``;

const Hero = () => {
  return (
    <Section id="hero">
      <Container tw="flex pt-32 h-full">
        <Grid tw="mt-auto mb-24">
          <Caption>
            <WrapTitle>
              <Subtitle>7th year celebration.</Subtitle>
              <Title>
                Make your digital experience grow soulfully to the next level
              </Title>
            </WrapTitle>
          </Caption>

          <WrapImgHero>
            <ImgHero>
              <ImageNext
                src="/assets/content/hero-1.png"
                quality={100}
                layout="fill"
                objectFit="contain"
              />
            </ImgHero>
          </WrapImgHero>
        </Grid>
      </Container>
    </Section>
  );
};

export default Hero;

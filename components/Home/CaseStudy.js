import Image from 'next/image';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = styled.section(props => [
  tw`w-full h-screen bg-cover bg-no-repeat`,
  css`
    background: url(${props.imageSrc}) ${props.color};
  `,
]);
const BgSection = tw.div`w-full h-full bg-cream-500 bg-opacity-50`;
const Caption = tw.div`col-span-7 flex`;
const WrapCase = tw.div`flex flex-col w-full items-start my-auto`;
const Subtitle = tw.p`text-4xl leading-9 text-black font-light mb-2`;
const Title = tw.h1`text-7xl leading-tight text-black `;
const ButtonOutline = tw.button`border border-gray-100 rounded-2xl  py-4 px-11 mt-4 text-gray-100 font-light`;

const HeroImg = tw.div`col-span-5 flex h-full`;
const ImgItem = styled.div`
  ${tw`w-full relative my-auto`}
  ${css`
    height: 35rem;
  `}
`;
const Img = tw(Image)``;
const CaseStudy = () => {
  return (
    <Section imageSrc="/assets/content/bg-hero-project-1.png" color="#EEDDCD">
      <Container tw="h-full">
        <Grid tw="h-full">
          <Caption>
            <WrapCase>
              <Subtitle>Telkom School</Subtitle>
              <Title>Integrated and technology-based school management.</Title>
              <ButtonOutline>Read case study</ButtonOutline>
            </WrapCase>
          </Caption>
          <HeroImg>
            <ImgItem>
              <Img
                src="/assets/content/hero-project-1.png"
                layout="fill"
                objectFit="fill"
              />
            </ImgItem>
          </HeroImg>
        </Grid>
      </Container>
    </Section>
  );
};

export default CaseStudy;

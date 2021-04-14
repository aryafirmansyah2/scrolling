import Image from 'next/image';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = styled.section(props => [
  tw`w-full h-screen bg-cover bg-no-repeat `,
  css`
    background: ${props.color};
  `,
]);
const BgSection = tw.div`w-full h-full bg-cream-500 bg-opacity-50`;
const Caption = tw.div`col-span-7 flex`;
const WrapCase = tw.div`flex flex-col w-full items-start my-auto`;
const Subtitle = tw.p`text-4xl leading-9  font-light mb-2 opacity-75`;
const Title = tw.h1`text-7xl leading-tight `;
const ButtonOutline = tw.button`border  rounded-2xl  py-4 px-11 mt-4  font-light`;

const HeroImg = tw.div`col-span-5 flex h-full`;
const ImgItem = styled.div`
  ${tw`w-full relative my-auto`}
  ${css`
    height: 35rem;
  `}
`;
const Img = tw(Image)``;
const Eclipse = styled.img(props => [
  tw`absolute z-0`,
  css`
    top: ${props.top};
    left: ${props.left};
    bottom: ${props.bottom};
    right: ${props.right};
    filter: ${props.filter};
    -webkit-filter: ${props.filter};
  `,
]);
const CaseStudy = () => {
  return (
    <>
      <Section color="hsla(29,35%,38%,1)" id="telkom-school">
        <Container tw="h-full relative">
          <Eclipse
            src="/assets/pattern/case-one/eclipse-1.svg"
            top="-15%"
            left="-10%"
            filter="blur(400px)"
          />
          <Eclipse
            src="/assets/pattern/case-one/eclipse-2.svg"
            bottom="0"
            left="10%"
            filter="blur(400px)"
          />
          <Grid tw="h-full z-10">
            <Caption>
              <WrapCase>
                <Subtitle tw="text-white">Telkom School</Subtitle>
                <Title tw="text-white">
                  Integrated and technology-based school management.
                </Title>
                <ButtonOutline tw="text-white border-white">
                  Read case study
                </ButtonOutline>
              </WrapCase>
            </Caption>
            <HeroImg>
              <ImgItem>
                <Img
                  src="/assets/content/hero-project-1.png"
                  layout="fill"
                  objectFit="fill"
                  quality={100}
                />
              </ImgItem>
            </HeroImg>
          </Grid>
        </Container>
      </Section>
      <Section color="hsla(205,100%,95%,1)" id="duit-kas" tw="z-10 relative">
        <Container tw="h-full">
          <Grid tw="h-full">
            <Caption>
              <WrapCase>
                <Subtitle tw="text-black">Duitkas.com</Subtitle>
                <Title tw="text-black">
                  Financial activity management application
                </Title>
                <ButtonOutline tw="text-black border-black">
                  Read case study
                </ButtonOutline>
              </WrapCase>
            </Caption>
            <HeroImg>
              <ImgItem>
                <Img
                  src="/assets/content/hero-project-2.png"
                  layout="fill"
                  objectFit="fill"
                  quality={100}
                />
              </ImgItem>
            </HeroImg>
          </Grid>
        </Container>
      </Section>
      <Section color="hsla(32,100%,50%,1)" id="bni-pfm" tw="z-10 relative">
        <Container tw="h-full">
          <Grid tw="h-full">
            <Caption>
              <WrapCase>
                <Subtitle tw="text-white">BNI PFM</Subtitle>
                <Title tw="text-white">
                  BNI internet banking personal finance management facility
                </Title>
                <ButtonOutline tw="text-white border-white">
                  Read case study
                </ButtonOutline>
              </WrapCase>
            </Caption>
            <HeroImg>
              <ImgItem>
                <Img
                  src="/assets/content/hero-project-3.png"
                  layout="fill"
                  objectFit="fill"
                  quality={100}
                />
              </ImgItem>
            </HeroImg>
          </Grid>
        </Container>
      </Section>
      <Section color="hsla(218,98%,29%,1)" id="arema-fc" tw="z-10 relative">
        <Container tw="h-full">
          <Grid tw="h-full">
            <Caption>
              <WrapCase>
                <Subtitle tw="text-white">Arema FC</Subtitle>
                <Title tw="text-white">
                  Official website club activities and store management
                </Title>
                <ButtonOutline tw="text-white border-white">
                  Read case study
                </ButtonOutline>
              </WrapCase>
            </Caption>
            <HeroImg>
              <ImgItem>
                <Img
                  src="/assets/content/hero-project-4.png"
                  layout="fill"
                  objectFit="fill"
                  quality={100}
                />
              </ImgItem>
            </HeroImg>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default CaseStudy;

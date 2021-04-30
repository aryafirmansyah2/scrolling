import useResponsive from '@/utils/useResponsive';
import Image from 'next/image';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import Outline from '../Common/Outline';
import HeadingOne from '../Typography/HeadingOne';
import TextBody from '../Typography/TextBody';

const Section = tw.section`bg-white w-full h-screen flex`;
const Caption = tw.div`flex z-10 flex-col col-span-full row-start-2 pb-12 lg:(col-span-6 row-start-1) justify-end `;
const Title = tw(HeadingOne)`text-black font-bold leading-tight text-9.5xl w-10/12 lg:(w-full leading-normal)`;
const Subtitle = tw(TextBody)`text-2xl text-black opacity-75   w-full lg:(w-10/12 mt-7)`;
const ImgHero = styled.div`
  ${tw`col-span-8 col-end-13 lg:(col-span-6 row-start-1) overflow-hidden relative col-end-13`}
  ${css`
    height: 60vh;
  `}
`;
const Img = tw(Image)`h-full w-full object-cover`;

const HeroContact = () => {
  const { isDesktop } = useResponsive();
  console.log('Dekstop ', isDesktop);
  return (
    <Section id="hero-contact">
      <Container tw="relative flex">
        {isDesktop ? (
          <img src="/assets/pattern/contact/eclipse.svg" tw="absolute top-0 left-0 " />
        ) : (
          <img src="/assets/pattern/contact/tablet/eclipse.svg" tw="absolute -top-10 left-0" />
        )}

        <Grid tw="my-auto">
          <Caption>
            <Title isCommon>
              Realize Your Unlimited <Outline>Matters</Outline>{' '}
            </Title>
            <Subtitle isNormal>
              Regardless of simple or complicated, emerging or established, we'll greet you humbly. Let's grow together
              and make a dent in this space and time.
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

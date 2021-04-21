import Image from 'next/image';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingOne from '../Typography/HeadingOne';
import TextBody from '../Typography/TextBody';

const Section = tw.section`bg-black w-full h-screen flex`;
const Caption = tw.div`flex flex-col col-span-6 justify-end mb-24`;
const Title = tw(HeadingOne)`text-white `;
const Subtitle = tw(TextBody)`text-white opacity-75 mt-7 w-10/12`;
const ImgHero = styled.div`
  ${tw`col-span-6 overflow-hidden relative col-end-13`}
  ${css`
    height: 60vh;
  `}
`;
const Img = tw(Image)`h-full w-full object-cover`;

const HeroContact = () => {
  return (
    <Section id="hero-contact">
      <Container tw="my-auto">
        <Grid>
          <Caption>
            <Title isWoodland>Realize Your Unlimited Matters</Title>
            <Subtitle isNormal>
              Regardless of simple or complicated, emerging or established,
              we'll greet you humbly. Let's grow together and make a dent in
              this space and time.
            </Subtitle>
          </Caption>
          <ImgHero>
            <Img
              src="/assets/content/hero-contact-1.png"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </ImgHero>
        </Grid>
      </Container>
    </Section>
  );
};

export default HeroContact;

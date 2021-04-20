import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = tw.section`h-screen w-full relative bg-cover bg-no-repeat`;
const WrapTitle = tw.div`col-span-7 flex flex-col h-full`;
const Title = tw.h1`font-bold font-woodland text-8xl leading-tight mt-auto text-white`;

const HeroAbout = () => {
  return (
    <Section
      id="about"
      style={{ backgroundImage: 'url(/assets/content/hero-about.png)' }}
    >
      <Container tw="h-full">
        <Grid tw="py-24 h-full">
          <WrapTitle>
            <Title>We are a digital product design agency.</Title>
            <p tw="text-4xl text-white opacity-75 mt-2">
              Let’s collaborate with us
            </p>
          </WrapTitle>
        </Grid>
      </Container>
    </Section>
  );
};

export default HeroAbout;

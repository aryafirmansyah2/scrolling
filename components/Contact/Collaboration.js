import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingOne from '../Typography/HeadingOne';
import TextBody from '../Typography/TextBody';
import Button from '../Common/Button';

const Section = tw.section`w-full bg-white pt-20 pb-24`;
const ButtonCta = tw.button`col-span-6 px-3`;
const Title = tw(HeadingOne)`text-black`;
const Subtitle = tw(TextBody)`text-black mt-2`;
const Maping = tw.div`col-span-full h-screen bg-gray-200 flex items-center justify-center mt-44`;
const WrapButton = tw.div`col-span-full flex items-center justify-center`;

const Collaboration = () => {
  return (
    <Section>
      <Container>
        <Grid tw="gap-y-16">
          <ButtonCta tw="col-start-1">
            <Title isWoodland>I’m a partner</Title>
            <Subtitle isNormal>fill out a simple form</Subtitle>
          </ButtonCta>
          <ButtonCta tw="col-end-13">
            <Title isWoodland>Intership Program</Title>
            <Subtitle isNormal>Requirement & Downloadebles</Subtitle>
          </ButtonCta>
          <ButtonCta tw="col-start-1 row-start-2">
            <Title isWoodland>Carier</Title>
          </ButtonCta>
          <ButtonCta tw="col-end-13 row-start-2">
            <Title isWoodland>Talks & Workshop</Title>
          </ButtonCta>
          <Maping>map here</Maping>
          <WrapButton>
            <Button isSecondary tw="w-4/12">
              Get Direction
            </Button>
          </WrapButton>
        </Grid>
      </Container>
    </Section>
  );
};

export default Collaboration;

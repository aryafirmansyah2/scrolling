import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingOne from '../Typography/HeadingOne';
import TextBody from '../Typography/TextBody';

const Section = tw.section`w-full bg-white pt-20 pb-28`;
const Button = tw.button`col-span-6 px-3`;
const Title = tw(HeadingOne)`text-black`;
const Subtitle = tw(TextBody)`text-black mt-2`;
const Maping = tw.div`col-span-full h-screen bg-gray-200 flex items-center justify-center mt-44`;
const WrapButton = tw.div`col-span-full flex items-center justify-center`;

const Collaboration = () => {
  return (
    <Section>
      <Container>
        <Grid tw="gap-y-16">
          <Button tw="col-start-1">
            <Title isWoodland>I’m a partner</Title>
            <Subtitle isNormal>fill out a simple form</Subtitle>
          </Button>
          <Button tw="col-end-13">
            <Title isWoodland>Intership Program</Title>
            <Subtitle isNormal>Requirement & Downloadebles</Subtitle>
          </Button>
          <Button tw="col-start-1 row-start-2">
            <Title isWoodland>Carier</Title>
          </Button>
          <Button tw="col-end-13 row-start-2">
            <Title isWoodland>Talks & Workshop</Title>
          </Button>
          <Maping>map here</Maping>
        </Grid>
      </Container>
    </Section>
  );
};

export default Collaboration;

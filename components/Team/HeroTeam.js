import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = tw.section`h-screen w-full bg-white relative z-10`;
const MainContent = tw.div`col-span-full`;
const HeroTeam = () => {
  return (
    <Section id="hero-team">
      <Container>
        <Grid>
          <MainContent></MainContent>
        </Grid>
      </Container>
    </Section>
  );
};

export default HeroTeam;

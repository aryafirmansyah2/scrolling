import React from 'react';
import tw, { styled, css } from 'twin.macro';
import FadeInBottom from '../Animations/FadeInBottom';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingOne from '../Typography/HeadingOne';

const Section = styled.section`
  ${tw`sm:h-screen w-full bg-cream-500 relative z-10 flex`}
  ${css`
    height: 30vh;
  `}
`;
const MainContent = tw.div`col-span-full h-full relative overflow-hidden`;
const Title = tw(HeadingOne)`hidden sm:block text-brown-gold col-span-full text-center mt-40 sm:(mt-52) z-10 `;
const HeroTeam = () => {
  return (
    <Section id="hero-team">
      <img src="/assets/pattern/team/image-desktop.svg" tw="absolute object-cover w-full h-full" alt="" />
      <Container>
        <Grid tw="h-full">
          <MainContent>
            <Title isWoodland variants={FadeInBottom} initial="hidden" animate="show">
              Our Team
            </Title>
          </MainContent>
        </Grid>
      </Container>
    </Section>
  );
};

export default HeroTeam;

import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import TextBody from '../Typography/TextBody';
import HeadingThree from '../Typography/HeadingThree';

const Section = tw.section`w-full bg-white text-black min-h-screen flex`;
const WrapTitle = tw.div`col-span-full py-16 flex flex-col`;
const Title = tw.h1`text-8xl text-brown-500 text-center font-woodland font-bold mb-14`;

const Paragraf = tw(TextBody)`text-2.5xl text-center w-10/12 mx-auto`;

const WrapSubtitle = tw.div`col-span-full grid grid-cols-3 gap-16`;
const FlexColumn = tw.div`flex flex-col`;
const Subtitle = tw.p`text-2xl  text-left `;
const HeadingCapability = tw(HeadingThree)`mb-5`;
const OurCapability = () => {
  return (
    <Section id="capability">
      <Container tw="my-auto">
        <Grid>
          <WrapTitle>
            <Title>Our Capability</Title>
            <Paragraf isNormalLight>
              We combine insights, and craft to articulate your values.
              Designing an authentic space of expression that is incredible
              throughout possible touchpoints, with user behavior fundamental
              and experience development approaches. From content to
              interactions.
            </Paragraf>
          </WrapTitle>
          <WrapSubtitle>
            <FlexColumn>
              <HeadingCapability isCommonMedium>
                Development Solutions
              </HeadingCapability>
              <Subtitle>
                Development Consulting, Front-end, Back-end Development,
                Development, CMS Development, Android Develompment, Support and
                Maintenance
              </Subtitle>
            </FlexColumn>
            <FlexColumn>
              <HeadingCapability isCommonMedium>
                Discover & Strategy
              </HeadingCapability>
              <Subtitle>
                Requirement analysis, feature analysis, system requirements,
                system development strategies, and Experience Strategy,
                Production Planning.
              </Subtitle>
            </FlexColumn>
            <FlexColumn>
              <HeadingCapability isCommonMedium>Interactive</HeadingCapability>
              <Subtitle>
                Content Strategy, User Experience, Interface Design, Content
                Design, Wireframing and Prototyping, Visual Design, Responsive
                Design, UI Kits and Pattern Libraries.
              </Subtitle>
            </FlexColumn>
          </WrapSubtitle>
        </Grid>
      </Container>
    </Section>
  );
};

export default OurCapability;

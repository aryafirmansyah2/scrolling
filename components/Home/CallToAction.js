import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';

const Section = tw.section`w-full bg-black relative z-10 py-5`;
const WrapTitle = tw.div`w-8/12 mx-auto my-16`;
const Title = tw.h2`text-white font-woodland text-6xl text-center font-bold`;
const CallToAction = () => {
  return (
    <Section id="cta">
      <img
        src="/assets/pattern/call-to-action/looper.svg"
        tw="absolute left-0 top-0"
        alt=""
      />
      <Container tw="relative">
        <WrapTitle>
          <Title>Ready to collaboration?</Title>
        </WrapTitle>
      </Container>
    </Section>
  );
};

export default CallToAction;

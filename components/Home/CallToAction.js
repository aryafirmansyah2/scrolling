import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';

const Section = tw.section`w-full bg-black relative py-5`;
const WrapTitle = tw.div`w-8/12 mx-auto my-16 relative z-10`;
const Title = tw.h2`text-white font-woodland text-6xl text-center font-bold`;
const CallToAction = () => {
  return (
    <Section id="cta">
      <Container tw="relative">
        <img
          src="/assets/pattern/call-to-action/looper.svg"
          tw="absolute left-0 -top-20 z-0"
          alt=""
        />
        <WrapTitle>
          <Title>Ready to collaboration?</Title>
        </WrapTitle>
      </Container>
    </Section>
  );
};

export default CallToAction;

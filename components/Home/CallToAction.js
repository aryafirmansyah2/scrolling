import React from 'react';
import tw from 'twin.macro';
import useResponsive from '@/utils/useResponsive';

import Container from '../Common/Container';

import Pattern from '@/assets/pattern/call-to-action/tablet/looper.svg';

const Section = tw.div`w-full bg-black relative py-5`;
const WrapTitle = tw.div`w-full lg:w-8/12 mx-auto my-16 relative z-10`;
const Title = tw.h2`text-white font-woodland text-6xl text-center font-bold`;
const CallToAction = () => {
  const { isDesktop, isMobile } = useResponsive();

  return (
    <Section id="cta">
      {isDesktop ? null : (
        <img
          src="/assets/pattern/call-to-action/tablet/looper.png"
          tw="absolute -top-0 h-64 bottom-0  lg:(-top-20 left-0) z-0"
          alt=""
        />
      )}
      <Container tw="relative">
        {isDesktop && (
          <img
            src="/assets/pattern/call-to-action/looper.svg"
            tw="absolute top-0 -bottom-32  lg:(-top-20 left-0) z-0"
            alt=""
          />
        )}

        <WrapTitle>
          <Title>Ready to collaboration?</Title>
        </WrapTitle>
      </Container>
    </Section>
  );
};

export default CallToAction;

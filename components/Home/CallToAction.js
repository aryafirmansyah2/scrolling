import React from 'react';
import tw from 'twin.macro';
import useResponsive from '@/utils/useResponsive';

import Container from '../Common/Container';

import Pattern from '@/assets/pattern/call-to-action/tablet/looper.svg';

const Section = tw.div`w-full bg-black relative py-5`;
const WrapTitle = tw.div`w-full lg:w-8/12 mx-auto my-8 sm:my-16 relative z-10 flex items-center justify-center`;
const Title = tw.h2`text-white font-woodland text-6xl text-center font-bold`;
const Flex = tw.div`flex items-center mx-auto  w-full gap-4 sm:(w-10/12 gap-8)`;
const LinkCta = tw.a`font-woodland text-base sm:text-2xl text-white px-4 sm:px-12 font-bold`;
const CallToAction = () => {
  const { isDekstop, isMobile } = useResponsive();

  return (
    <Section id="cta">
      {/* {isDekstop ? null : (
        <img
          src="/assets/pattern/call-to-action/tablet/looper.png"
          tw="absolute -top-0 h-64 bottom-0  lg:(-top-20 left-0) z-0"
          alt=""
        />
      )} */}
      <Container tw="relative">
        {isDekstop && (
          <img
            src="/assets/pattern/call-to-action/looper.svg"
            tw="absolute top-0 -bottom-32  lg:(-top-20 left-0) z-0"
            alt=""
          />
        )}

        <WrapTitle>
          {isDekstop ? (
            <Title>Ready to collaboration?</Title>
          ) : (
            <Flex>
              <LinkCta>Email</LinkCta>
              <LinkCta>Whatsapp</LinkCta>
              <LinkCta>Phone</LinkCta>
            </Flex>
          )}
        </WrapTitle>
      </Container>
    </Section>
  );
};

export default CallToAction;

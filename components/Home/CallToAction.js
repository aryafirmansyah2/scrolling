import React, { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import useResponsive from '@/utils/useResponsive';

import Container from '../Common/Container';

import { AnimatePresence, motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import FadeInBottom from '../Animations/FadeInBottom';

const Section = styled.div`
  ${tw`w-full bg-black relative py-5`}
  ${css`
    @media screen and (min-width: 1500px) {
      min-height: 20vh;
    }
  `}
`;
const WrapTitle = tw.div`w-full lg:w-8/12 mx-auto py-8 sm:py-16 relative z-10 flex items-center justify-center  lg:h-40 2xl:h-52`;
const Title = tw(motion.h2)`text-white font-woodland text-6xl text-center font-bold cursor-pointer`;
const Flex = tw(motion.div)`flex items-center mx-auto  w-full gap-4 sm:(w-10/12 gap-8 mx-auto) md:(w-full justify-between)`;
const LinkCta = tw(motion.a)`font-woodland text-base lg:text-5xl sm:text-2xl text-white px-4 sm:px-12 md:px-6 font-bold cursor-pointer`;

const FadeInBottomHover = {
  hidden: {
    y: 50,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.42, 0, 0.58, 1],
      duration: 0.6,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
  },
};
const CallToAction = () => {
  const [showHover, setShowHover] = useState(true);
  const { isDekstop, isMobile } = useResponsive();

  return (
    <Section id="cta">
      <Container tw="relative">
        <InView>
          {({ inView, ref }) => (
            <WrapTitle ref={ref} onMouseEnter={() => setShowHover(true)} onMouseLeave={() => setShowHover(false)}>
              {isDekstop ? (
                <AnimatePresence>
                  {showHover ? (
                    <Flex>
                      <LinkCta variants={FadeInBottomHover} animate={inView && 'show'} initial="hidden" exit="exit">
                        Email
                      </LinkCta>
                      <LinkCta variants={FadeInBottomHover} animate={inView && 'show'} initial="hidden" exit="exit">
                        Whatsapp
                      </LinkCta>
                      <LinkCta variants={FadeInBottomHover} animate={inView && 'show'} initial="hidden" exit="exit">
                        Phone
                      </LinkCta>
                    </Flex>
                  ) : (
                    <Title variants={FadeInBottomHover} animate={inView && 'show'} initial="hidden" exit="exit">
                      Ready to collaboration?
                    </Title>
                  )}
                </AnimatePresence>
              ) : (
                <Flex>
                  <LinkCta variants={FadeInBottom} animate={inView && 'show'} initial="hidden">
                    Email
                  </LinkCta>
                  <LinkCta variants={FadeInBottom} animate={inView && 'show'} initial="hidden">
                    Whatsapp
                  </LinkCta>
                  <LinkCta variants={FadeInBottom} animate={inView && 'show'} initial="hidden">
                    Phone
                  </LinkCta>
                </Flex>
              )}
            </WrapTitle>
          )}
        </InView>
      </Container>
    </Section>
  );
};

export default CallToAction;

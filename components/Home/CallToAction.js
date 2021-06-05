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
const WrapTitle = tw.div`w-full lg:w-8/12 mx-auto py-8 xl:py-16 relative z-10 flex items-center justify-center  xl:h-40 2xl:h-52`;
const Title = tw(motion.h2)`text-white font-woodland text-6xl text-center font-bold cursor-pointer `;
const Flex = styled(motion.div)`
  ${tw`flex items-center mx-auto transition-all duration-200 ease-in-out  w-full gap-4 sm:(w-10/12 gap-8 mx-auto) md:(w-full justify-center) hover:justify-between`}
  &:hover {
    h2 {
      ${tw`hidden`}
    }
    a {
      ${tw`block`}
    }
  }
`;

const LinkCta = tw(motion.a)`transition-all xl:hidden font-woodland text-base xl:text-5xl sm:text-2xl text-white px-4 sm:px-12 md:px-6 font-bold cursor-pointer pb-1 hover:(text-brown-gold)`;

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
  const [showHover, setShowHover] = useState(false);
  const { isBigDekstop, isMobile } = useResponsive();

  const handleEnter = () => {
    if (showHover === false) {
      setShowHover(true);
    }
  };
  const handleLeave = () => {
    setShowHover(false);
  };
  return (
    <Section id="cta">
      <Container tw="relative" onMouseEnter={handleEnter} onMouseDown={handleLeave} onMouseLeave={handleLeave}>
        <InView>
          {({ inView, ref }) => (
            <WrapTitle ref={ref}>
              {isBigDekstop ? (
                <AnimatePresence onExitComplete>
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
                    <Title variants={FadeInBottomHover} animate={inView && 'show'} initial="hidden" exit="exit">
                      Ready to collaboration?
                    </Title>
                  </Flex>
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

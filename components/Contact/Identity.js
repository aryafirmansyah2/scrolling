import { motion } from 'framer-motion';
import React from 'react';
import { InView } from 'react-intersection-observer';
import tw from 'twin.macro';
import FadeInLeft from '../Animations/FadeInLeft';
import FadeInRight from '../Animations/FadeInRight';
import StaggerChild from '../Animations/StaggerChild';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingThree from '../Typography/HeadingThree';
import TextBody from '../Typography/TextBody';

const Section = tw.section`w-full bg-gray-500 py-20 sm:py-36 `;
const MainContent = tw(motion.div)`col-span-full flex-col lg:(col-span-10 col-start-2 flex-row items-start)  flex  `;
const Address = tw(motion.address)`min-w-min  mt-24 not-italic sm:(ml-28) lg:(ml-auto mt-0) `;
const LinkContact = tw(motion.a)`font-common text-2xl sm:text-4xl lg:text-2xl `;
const Identity = () => {
  return (
    <Section id="identity">
      <Container>
        <Grid>
          <InView>
            {({ inView, ref }) => (
              <MainContent ref={ref} variants={StaggerChild} animate={inView && 'show'} initial="hidden">
                <motion.img src="/assets/logo/inagata-color.svg" tw="h-24 w-auto" variants={FadeInLeft} />
                <Address>
                  <HeadingThree isCommon tw="font-medium " variants={FadeInRight}>
                    PT Ina Gata Persada
                  </HeadingThree>
                  <TextBody isNormal tw="mt-4 mb-6 text-2xl sm:text-4xl lg:text-2xl" variants={FadeInRight}>
                    Perum Griya Shanta Blok L.110, <br />
                    Malang - Indonesia
                    <br />
                    Postal code - 65142{' '}
                  </TextBody>
                  <LinkContact href="/" variants={FadeInRight}>
                    +6281 333 666 937
                  </LinkContact>
                  <br />
                  <LinkContact href="/" variants={FadeInRight}>
                    info@inagata.com
                  </LinkContact>
                </Address>
              </MainContent>
            )}
          </InView>
        </Grid>
      </Container>
    </Section>
  );
};

export default Identity;

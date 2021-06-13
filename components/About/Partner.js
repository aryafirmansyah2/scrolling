import useResponsive from '@/utils/useResponsive';
import { motion } from 'framer-motion';

import React from 'react';
import { InView } from 'react-intersection-observer';
import tw, { styled, css } from 'twin.macro';
import FadeInBottom from '../Animations/FadeInBottom';
import StaggerChild from '../Animations/StaggerChild';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingOne from '../Typography/HeadingOne';

const Section = tw.section`w-full bg-white text-black min-h-screen flex py-20 sm:py-0`;
const WrapTitle = tw.div`col-span-full pb-16 flex flex-col`;
const Title = tw(HeadingOne)`text-brown-500 text-center`;
const WrapPartner = tw(motion.div)`col-span-full md:(col-span-10 col-start-2) flex flex-col `;
const PartnerCampus = tw(motion.div)`flex flex-wrap justify-between sm:mb-10 lg:mb-20`;
const PartnerCommunity = tw(motion.div)`flex flex-wrap justify-between items-center sm:mb-10 lg:mb-20`;
const PartnerCompany = tw(motion.div)`flex flex-wrap justify-between items-center sm:mb-10 lg:mb-20`;

const Image = styled.img`
  ${tw`mx-2 my-2 filter grayscale`}
  ${css`
    max-height: 72px;
    max-width: 130px;
  `}
`;

const Partner = ({}) => {
  const { isDekstop } = useResponsive();
  return (
    <Section id="capability">
      <Container tw="my-auto">
        <Grid>
          <InView>
            {({ inView, ref }) => (
              <WrapTitle ref={ref}>
                <Title isWoodland variants={FadeInBottom} animate={inView && 'show'} initial="hidden">
                  Now & Then Partner
                </Title>
              </WrapTitle>
            )}
          </InView>
          {isDekstop ? (
            <InView>
              {({ inView, ref }) => (
                <WrapPartner ref={ref} variants={StaggerChild} animate={inView && 'show'} initial="hidden">
                  <PartnerCampus>
                    <motion.img variants={FadeInBottom} src="/assets/partner/UM.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/UB.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/telkom.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/UNIDA.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/UMM.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                  </PartnerCampus>
                  <PartnerCommunity>
                    <motion.img variants={FadeInBottom} src="/assets/partner/PENSKY.png" tw="h-16 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/STASION.png" tw="h-16 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/IKITAS.png" tw="h-8 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/AREMA.png" tw="h-16 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/MCF.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                  </PartnerCommunity>
                  <PartnerCompany>
                    <motion.img variants={FadeInBottom} src="/assets/partner/BNI.png" tw="h-12 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/pjb.png" tw="h-12 aspect-w-1 filter grayscale" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/kemae.png" tw="h-12 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/balitbang.png" tw="h-14 aspect-w-1" alt="Universitas Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/santos.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                  </PartnerCompany>
                </WrapPartner>
              )}
            </InView>
          ) : (
            <InView>
              {({ inView, ref }) => (
                <WrapPartner ref={ref} variants={StaggerChild} animate={inView && 'show'} initial="hidden">
                  <PartnerCampus>
                    <Image src="/assets/partner/mobile/UM.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/UB.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/UIN.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/UMM.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/TELKOM.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/GONTOR.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/SANTOS.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/PENSKY.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/STASION.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/AREMA.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/IKITAS.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/KEMAE.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/MCF.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/BNI.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/PJB.png" alt="Universitas Malang" />
                    <Image src="/assets/partner/mobile/BALITBANG.png" alt="Universitas Malang" />
                  </PartnerCampus>
                </WrapPartner>
              )}
            </InView>
          )}
        </Grid>
      </Container>
    </Section>
  );
};

export default Partner;

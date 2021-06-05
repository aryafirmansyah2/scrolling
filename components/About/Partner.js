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

const ItemImage = styled(motion.div)`
  ${tw`flex-grow-0 flex-shrink-0 mx-6 my-6 sm:(m-0)`}
  ${css`
    flex-basis: 40%;
    max-height: 70px;

    @media screen and (min-width: 768px) {
      flex-basis: 15%;
    }
  `}
  ${props =>
    props.maxWidth &&
    css`
      max-width: 70px;
    `}
`;
const Image = tw.img`w-full h-full`;

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
                    <ItemImage maxWidth variants={FadeInBottom}>
                      <Image src="/assets/partner/UM.png" alt="Universitas Malang" />
                    </ItemImage>
                    <ItemImage maxWidth variants={FadeInBottom}>
                      <Image src="/assets/partner/UIN.png" alt="UIN Malang" />
                    </ItemImage>
                    <ItemImage maxWidth variants={FadeInBottom}>
                      <Image src="/assets/partner/UB.png" alt="Universitas Brawijaya Malang" />
                    </ItemImage>
                    <ItemImage maxWidth variants={FadeInBottom}>
                      <Image src="/assets/partner/UMM.png" alt="Universitas Muhammadiyah Malang" />
                    </ItemImage>
                  </PartnerCampus>
                  <PartnerCommunity>
                    <ItemImage tw="order-2 sm:order-1 mx-0" maxWidth variants={FadeInBottom}>
                      <Image src="/assets/partner/UNIDA.png" alt="UNIDA" />
                    </ItemImage>
                    <ItemImage
                      css={[
                        tw`flex-none order-1 sm:order-2`,
                        css`
                          min-width: 220px;
                        `,
                      ]}
                      maxWidth
                      variants={FadeInBottom}
                    >
                      <img src="/assets/partner/telkom.png" tw="h-16 aspect-w-1" alt="Telkom" />
                    </ItemImage>
                    <ItemImage tw="order-3 sm:order-3 mx-0" maxWidth variants={FadeInBottom}>
                      <img src="/assets/partner/PENSKY.png" tw="h-14 sm:h-16 aspect-w-1" alt="Pensky" />
                    </ItemImage>
                    <ItemImage tw="flex-none order-4 mx-0" maxWidth variants={FadeInBottom}>
                      <img src="/assets/partner/santos.png" alt="Santos" tw="h-14 sm:h-16 aspect-w-1" />
                    </ItemImage>
                  </PartnerCommunity>
                  <PartnerCompany tw="space-y-6 space-x-6 mb-4">
                    <motion.img variants={FadeInBottom} src="/assets/partner/STASION.png" tw="h-16 aspect-w-1 order-1 " alt="STASION Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/IKITAS.png" tw="h-8 aspect-w-1 order-3 sm:order-2" alt="IKITAS " />
                    <motion.img variants={FadeInBottom} src="/assets/partner/AREMA.png" tw="h-16 aspect-w-1 order-4 sm:order-3" alt="Arema" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/MCF.png" tw="h-16 aspect-w-1 order-2 sm:order-4" alt="Malang Creative Fusion" />
                  </PartnerCompany>
                  <PartnerCompany tw="space-y-6 space-x-6 justify-evenly sm:justify-between">
                    <motion.img variants={FadeInBottom} src="/assets/partner/BNI.png" tw="h-10 aspect-w-1" alt="BNI Malang" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/pjb.png" tw="h-10 aspect-w-1 filter grayscale" alt="PJB" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/kemae.png" tw="h-10 aspect-w-1" alt="Kemae" />
                    <motion.img variants={FadeInBottom} src="/assets/partner/balitbang.png" tw="h-10 aspect-w-1" alt="Balitbang" />
                  </PartnerCompany>
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

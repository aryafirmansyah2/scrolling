import useResponsive from '@/utils/useResponsive';
import Image from 'next/image';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingOne from '../Typography/HeadingOne';

const Section = tw.section`w-full bg-white text-black min-h-screen flex py-20 sm:py-0`;
const WrapTitle = tw.div`col-span-full pb-16 flex flex-col`;
const Title = tw(HeadingOne)`text-brown-500 text-center`;
const WrapPartner = tw.div`col-span-full md:(col-span-10 col-start-2) flex flex-col `;
const PartnerCampus = tw.div`flex flex-wrap justify-between sm:mb-10 lg:mb-20`;
const PartnerCommunity = tw.div`flex flex-wrap justify-between items-center sm:mb-10 lg:mb-20`;
const PartnerCompany = tw.div`flex flex-wrap justify-between items-center sm:mb-10 lg:mb-20`;

const ItemImage = styled.div`
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
const ImgPartner = styled.image`
  ${tw`aspect-w-1 my-4 mx-6 lg:mx-12`}
  ${css`
    max-height: 80px;
    /* max-width: 170px; */
  `}
`;
const Partner = ({}) => {
  const { isDekstop } = useResponsive();
  return (
    <Section id="capability">
      <Container tw="my-auto">
        <Grid>
          <WrapTitle>
            <Title isWoodland>Now & Then Partner</Title>
          </WrapTitle>
          {isDekstop && (
            <WrapPartner>
              <PartnerCampus>
                <img src="/assets/partner/UM.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/UB.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/telkom.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/UNIDA.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/UMM.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
              </PartnerCampus>
              <PartnerCommunity>
                <img src="/assets/partner/PENSKY.png" tw="h-16 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/STASION.png" tw="h-16 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/IKITAS.png" tw="h-8 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/AREMA.png" tw="h-16 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/MCF.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
              </PartnerCommunity>
              <PartnerCompany>
                <img src="/assets/partner/BNI.png" tw="h-12 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/pjb.png" tw="h-12 aspect-w-1 filter grayscale" alt="Universitas Malang" />
                <img src="/assets/partner/kemae.png" tw="h-12 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/balitbang.png" tw="h-14 aspect-w-1" alt="Universitas Malang" />
                <img src="/assets/partner/santos.png" tw="h-20 aspect-w-1" alt="Universitas Malang" />
              </PartnerCompany>
            </WrapPartner>
          )}
          <WrapPartner>
            <PartnerCampus>
              <ItemImage maxWidth>
                <Image src="/assets/partner/UM.png" layout="responsive" height={72} width={72} alt="Universitas Malang" quality={100} />
              </ItemImage>
              <ItemImage maxWidth>
                <Image src="/assets/partner/UIN.png" layout="responsive" height={72} width={72} alt="Universitas Malang" quality={100} />
              </ItemImage>
              <ItemImage maxWidth>
                <Image src="/assets/partner/UB.png" layout="responsive" height={72} width={72} alt="Universitas Malang" quality={100} />
              </ItemImage>
              <ItemImage maxWidth>
                <Image src="/assets/partner/UMM.png" layout="responsive" height={72} width={72} alt="Universitas Malang" quality={100} />
              </ItemImage>
            </PartnerCampus>
            <PartnerCommunity>
              <ItemImage tw="order-2 sm:order-1 mx-0" maxWidth>
                <Image src="/assets/partner/UNIDA.png" height="80" width="80" objectFit="contain" alt="Universitas Malang" quality={100} />
              </ItemImage>
              <ItemImage tw="flex-none order-1 sm:order-2">
                <img src="/assets/partner/telkom.png" tw="h-16 aspect-w-1" alt="Universitas Malang" />
              </ItemImage>
              <ItemImage tw="order-3 sm:order-3 mx-0" maxWidth>
                <img src="/assets/partner/PENSKY.png" tw="h-14 sm:h-16 aspect-w-1" alt="Universitas Malang" />
              </ItemImage>
              <ItemImage tw="flex-none order-4 mx-0" maxWidth>
                <img src="/assets/partner/santos.png" alt="Universitas Malang" tw="h-14 sm:h-16 aspect-w-1" />
              </ItemImage>
            </PartnerCommunity>
            <PartnerCompany tw="space-y-6 space-x-6 mb-4">
              <img src="/assets/partner/STASION.png" tw="h-16 aspect-w-1 order-1 " alt="Universitas Malang" />
              <img src="/assets/partner/IKITAS.png" tw="h-8 aspect-w-1 order-3 sm:order-2" alt="Universitas Malang" />
              <img src="/assets/partner/AREMA.png" tw="h-16 aspect-w-1 order-4 sm:order-3" alt="Universitas Malang" />
              <img src="/assets/partner/MCF.png" tw="h-16 aspect-w-1 order-2 sm:order-4" alt="Universitas Malang" />
            </PartnerCompany>
            <PartnerCompany tw="space-y-6 space-x-6 justify-evenly sm:justify-between">
              <img src="/assets/partner/BNI.png" tw="h-10 aspect-w-1" alt="Universitas Malang" />
              <img src="/assets/partner/pjb.png" tw="h-10 aspect-w-1 filter grayscale" alt="Universitas Malang" />
              <img src="/assets/partner/kemae.png" tw="h-10 aspect-w-1" alt="Universitas Malang" />
              <img src="/assets/partner/balitbang.png" tw="h-10 aspect-w-1" alt="Universitas Malang" />
            </PartnerCompany>
          </WrapPartner>
        </Grid>
      </Container>
    </Section>
  );
};

export default Partner;

import Image from 'next/image';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingOne from '../Typography/HeadingOne';

const Section = tw.section`w-full bg-white text-black min-h-screen flex`;
const WrapTitle = tw.div`col-span-full pb-16 flex flex-col`;
const Title = tw(HeadingOne)`text-brown-500 text-center`;
const WrapPartner = tw.div`col-span-full flex items-center justify-between flex-wrap`;
// const WrapImg = styled.div`
//   ${tw`h-20 aspect-w-1 `}
//   ${css`
//     min-width: 5rem;
//     /* width: auto; */
//   `}
// `;
const ImgPartner = styled.img`
  ${tw`h-auto w-auto aspect-w-1 my-4 mx-12`}
  ${css`
    max-height: 5rem;
    /* max-width: 170px; */
  `}
`;
const Partner = ({
  listPartner = [
    {
      img: '/assets/partner/UM.png',
      name: 'Universitas Malang',
    },
    {
      img: '/assets/partner/UB.png',
      name: 'Universitas Brawijaya',
    },
    {
      img: '/assets/partner/telkom.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/UIN.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/UNIDA.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/UMM.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/PENSKY.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/STASION.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/IKITAS.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/AREMA.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/MCF.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/bni.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/pjb.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/kemae.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/balitbang.png',
      name: 'Yayasan Telkom',
    },
    {
      img: '/assets/partner/santos.png',
      name: 'Yayasan Telkom',
    },
  ],
}) => {
  return (
    <Section id="capability">
      <Container tw="my-auto">
        <Grid>
          <WrapTitle>
            <Title isWoodland>Now & Then Partner</Title>
          </WrapTitle>
          <WrapPartner>
            {listPartner.map((listPartners, index) => (
              <ImgPartner
                key={index}
                src={listPartners.img}
                alt={listPartners.name}
              />
            ))}
          </WrapPartner>
        </Grid>
      </Container>
    </Section>
  );
};

export default Partner;

import Image from 'next/image';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingFour from '../Typography/HeadingFour';
import HeadingOne from '../Typography/HeadingOne';
import HeadingTwo from '../Typography/HeadingTwo';

import listProject from '@/data/listProject';
import useResponsive from '@/utils/useResponsive';

const Section = tw.section`w-full bg-white py-32`;
const Title = tw(HeadingOne)`text-brown-gold col-span-full text-center mt-28 mb-20`;
const Filter = tw.div`col-span-full flex mb-4`;
const FilterItem = HeadingTwo.withComponent('button');
const WrapGallery = tw.div`col-span-full `;
const Gallery = styled.div`
  ${tw`flex flex-wrap flex-col -mx-4 `}
  ${css`
    height: 2800px;
    align-content: space-between;
  `}
  

  &::before,
  &::after {
    ${css`
      content: '';
      flex-basis: 100%;
      width: 0;
      order: 2;
    `}
  }
`;
const Item = styled.div`
  ${tw`flex flex-col px-8 w-6/12 relative mb-16`}
  &:nth-child(2n+1) {
    ${css`
      order: 1;
    `}
  }
  &:nth-child(2n) {
    ${css`
      order: 2;
    `}
  }
`;
const WrapImg = styled.div(({ isLong, isShort }) => [
  tw`overflow-hidden w-full relative`,
  isLong &&
    css`
      height: 800px;
    `,
  isShort &&
    css`
      height: 500px;
    `,
]);
const Img = tw(Image)`w-full h-full`;
const Subtitle = tw(HeadingFour)`text-gray-300 uppercase mt-7`;
const TitleProject = tw(HeadingTwo)`text-black capitalize`;

const GalleryMobile = tw.div`flex flex-col`;
const ItemMobile = tw.div`flex flex-col w-full mb-20`;
const ListWork = () => {
  const { isDesktop } = useResponsive();
  return (
    <Section>
      <Container>
        <Grid>
          <Title isWoodland>Our Works</Title>
          <Filter>
            <FilterItem isCommon tw="text-black mx-2">
              Show All
            </FilterItem>
            <FilterItem isCommon tw="text-gray-300 mx-2">
              Website
            </FilterItem>
            <FilterItem isCommon tw="text-gray-300 mx-2">
              Mobile Apps
            </FilterItem>
            <FilterItem isCommon tw="text-gray-300 mx-2">
              UI/UX Design
            </FilterItem>
          </Filter>
          <WrapGallery>
            {isDesktop ? (
              <Gallery>
                {listProject.map((listProjects, index) => (
                  <Item key={index}>
                    <WrapImg isLong={listProjects.scale === 'long'} isShort={listProjects.scale === 'short'}>
                      <Img src={listProjects.img} layout="fill" objectFit="cover" />
                    </WrapImg>
                    <Subtitle isCommon>{listProjects.name}</Subtitle>
                    <TitleProject isCommon>{listProjects.subname}</TitleProject>
                  </Item>
                ))}
              </Gallery>
            ) : (
              <GalleryMobile>
                {listProject.map((listProjects, index) => (
                  <ItemMobile key={index}>
                    <WrapImg isLong={listProjects.scale === 'long'} isShort={listProjects.scale === 'short'}>
                      <Img src={listProjects.img} layout="fill" objectFit="cover" />
                    </WrapImg>
                    <Subtitle isCommon>{listProjects.name}</Subtitle>
                    <TitleProject isCommon>{listProjects.subname}</TitleProject>
                  </ItemMobile>
                ))}
              </GalleryMobile>
            )}
          </WrapGallery>
        </Grid>
      </Container>
    </Section>
  );
};

export default ListWork;

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingFour from '../Typography/HeadingFour';
import HeadingOne from '../Typography/HeadingOne';
import HeadingTwo from '../Typography/HeadingTwo';

import listProject from '@/data/listProject';
import useResponsive from '@/utils/useResponsive';
import FadeInBottom from '../Animations/FadeInBottom';
import { motion } from 'framer-motion';
import StaggerChild from '../Animations/StaggerChild';
import FadeInLeft from '../Animations/FadeInLeft';
import { InView } from 'react-intersection-observer';

const Section = tw.section`w-full bg-white pt-20 pb-10 sm:py-32`;
const Title = tw(HeadingOne)`text-brown-gold col-span-full text-center mt-12 mb-10 sm:(mt-28 mb-20)`;
const Filter = tw(motion.div)`col-span-full flex gap-3 sm:gap-0 flex-wrap sm:flex-nowrap mb-4`;
const FilterHeading = styled(HeadingTwo)`
  ${tw` px-2 mx-2 text-2xl sm:(px-0 text-5xl) transition-all focus:outline-none`}
  ${props => (props.active ? tw`text-black ` : tw`text-gray-300`)}
`;
const FilterItem = FilterHeading.withComponent('button');
const WrapGallery = tw.div`col-span-full `;
const Gallery = styled(motion.div)`
  ${tw`flex flex-wrap flex-col -mx-4 `}
  ${css`
    /* height: 2800px; */
    align-content: space-between;
  `}
  ${props =>
    props.filterWork === 'all' &&
    css`
      height: 2800px;
    `}
  ${props =>
    props.filterWork === 'website' &&
    css`
      height: 1400px;
    `}
  ${props =>
    props.filterWork === 'mobile' &&
    css`
      height: 1000px;
    `}
  ${props =>
    props.filterWork === 'design' &&
    css`
      height: 1000px;
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
const Item = styled(motion.div)`
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
      height: 400px;
      @media screen and (min-width: 650px) {
        height: 800px;
      }
    `,
  isShort &&
    css`
      height: 250px;
      @media screen and (min-width: 650px) {
        height: 500px;
      }
    `,
]);
const Img = tw(Image)`w-full h-full`;
const Subtitle = tw(HeadingFour)`text-gray-300 uppercase mt-7`;
const TitleProject = tw(HeadingTwo)`text-black capitalize`;

const GalleryMobile = tw.div`flex flex-col`;
const ItemMobile = tw.div`flex flex-col w-full mb-10 sm:mb-20`;

const ListWorkComponent = ({ listProject }) => {
  return (
    <Gallery variants={StaggerChild} initial="hidden" animate="show">
      {listProject.map(listProject => (
        <Item variants={FadeInBottom}>
          <WrapImg isLong={filteredProject.scale === 'long'} isShort={filteredProject.scale === 'short'}>
            <Img src={filteredProject.img} layout="fill" objectFit="cover" />
          </WrapImg>
          <Subtitle isCommon>{filteredProject.name}</Subtitle>
          <TitleProject isCommon>{filteredProject.subname}</TitleProject>
        </Item>
      ))}
    </Gallery>
  );
};

const ListWork = () => {
  const { isDekstop } = useResponsive();
  const [filterWork, setFilterWork] = useState('all');
  const [filteredWork, setFilteredWork] = useState({});

  const handleFilterAll = e => {
    e.preventDefault();
    setFilterWork('all');
  };
  const handleFilterWebsite = e => {
    e.preventDefault();
    setFilterWork('website');
  };
  const handleFilterMobile = e => {
    e.preventDefault();
    setFilterWork('mobile');
  };
  const handleFilterDesign = e => {
    e.preventDefault();
    setFilterWork('design');
  };

  useEffect(() => {
    console.log('Rerender ', filterWork);
  }, [filterWork]);

  return (
    <Section>
      <Container>
        <Grid>
          <Title isWoodland variants={FadeInBottom} animate="show" initial="hidden">
            Our Works
          </Title>
          <Filter variants={StaggerChild} initial="hidden" animate="show">
            <FilterItem as={motion.button} active={filterWork === 'all'} variants={FadeInLeft} isCommon onClick={handleFilterAll}>
              Show All
            </FilterItem>
            <FilterItem as={motion.button} active={filterWork === 'website'} variants={FadeInLeft} isCommon onClick={handleFilterWebsite}>
              Website
            </FilterItem>
            <FilterItem as={motion.button} active={filterWork === 'mobile'} variants={FadeInLeft} isCommon onClick={handleFilterMobile}>
              Mobile Apps
            </FilterItem>
            <FilterItem as={motion.button} active={filterWork === 'design'} variants={FadeInLeft} isCommon onClick={handleFilterDesign}>
              UI/UX Design
            </FilterItem>
          </Filter>
          <WrapGallery>
            {isDekstop ? (
              <>
                <InView>
                  {({ inView, ref }) => (
                    <Gallery ref={ref} variants={StaggerChild} initial="hidden" animate={inView && 'show'} filterWork={filterWork}>
                      {filterWork === 'all'
                        ? listProject.map(filteredProject => (
                            <Item ref={ref} variants={FadeInBottom} animate={inView && 'show'} initial="hidden">
                              <WrapImg isLong={filteredProject.scale === 'long'} isShort={filteredProject.scale === 'short'}>
                                <Img src={filteredProject.img} layout="fill" objectFit="cover" />
                              </WrapImg>
                              <Subtitle isCommon>{filteredProject.name}</Subtitle>
                              <TitleProject isCommon>{filteredProject.subname}</TitleProject>
                            </Item>
                          ))
                        : listProject
                            .filter(listProject => listProject.label === filterWork)
                            .map(filteredProject => (
                              <Item variants={FadeInBottom}>
                                <WrapImg isLong={filteredProject.scale === 'long'} isShort={filteredProject.scale === 'short'}>
                                  <Img src={filteredProject.img} layout="fill" objectFit="cover" />
                                </WrapImg>
                                <Subtitle isCommon>{filteredProject.name}</Subtitle>
                                <TitleProject isCommon>{filteredProject.subname}</TitleProject>
                              </Item>
                            ))}
                    </Gallery>
                  )}
                </InView>
              </>
            ) : (
              <GalleryMobile>
                {listProject.map((listProjects, index) => (
                  <ItemMobile key={index}>
                    <WrapImg isLong={listProjects.scale === 'long'} isShort={listProjects.scale === 'short'}>
                      <Img src={listProjects.img} layout="fill" objectFit="cover" />
                    </WrapImg>
                    <Subtitle isCommon>{listProjects.name}</Subtitle>
                    <TitleProject isCommon tw="font-semibold sm:font-normal">
                      {listProjects.subname}
                    </TitleProject>
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

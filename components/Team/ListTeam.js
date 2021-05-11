import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingFour from '../Typography/HeadingFour';
import HeadingTwo from '../Typography/HeadingTwo';
import TextBody from '../Typography/TextBody';
import listTeam from '@/data/listTeam';
import Link from 'next/link';
import HeadingOne from '../Typography/HeadingOne';

const Section = tw.section`min-h-screen w-full bg-white relative z-10 pt-6 pb-20 sm:(pt-36 pb-40)`;
const TextContent = tw.div`col-span-full col-start-1 flex flex-col sm:(col-span-10 col-start-2) mb-12`;
const ItemTeam = tw.div`col-span-full lg:col-span-4 flex flex-col`;
const ImgBg = tw.div`w-full aspect-h-1 bg-gray-500 mb-4 sm:mb-12`;
const ImgTeam = tw.img`w-full h-full`;
const ItemCaption = tw.div`flex flex-col`;
const NameTeam = tw(HeadingTwo)`text-black mb-1 font-semibold text-2.5xl sm:text-5xl `;
const PositionTeam = tw(HeadingFour)`text-lg sm:text-2xl text-gray-200 mb-7 capitalize`;
const QuoteTeam = tw(TextBody)`text-black mb-7 text-justify text-lg  md:text-2xl`;
const SocialTeam = tw.div`flex w-full space-x-4`;
const SocialLink = tw.a`font-semibold text-sm sm:text-base uppercase`;
const Title = tw(HeadingOne)`text-brown-gold col-span-full mb-6 mt-4 text-center z-10 `;
const ListTeam = () => {
  return (
    <Section id="list-team">
      <Container>
        <Grid tw="gap-y-14 sm:(gap-x-10 gap-y-24)">
          <TextContent>
            <Title isWoodland>Our Team</Title>
            <TextBody isLgLight tw="text-center ">
              We're the child of the 90's, transformed into mutants and interested in technological developments on earth.
            </TextBody>
          </TextContent>
          {listTeam.map((listTeams, index) => (
            <ItemTeam key={index}>
              <ImgBg>
                <ImgTeam src={listTeams.img} alt={listTeams.name} />
              </ImgBg>
              <ItemCaption>
                <NameTeam isCommon>{listTeams.name}</NameTeam>
                <PositionTeam isCommon>{listTeams.position}</PositionTeam>
                <QuoteTeam isNormal>{listTeams.quote}</QuoteTeam>
                <SocialTeam>
                  <Link href="/" passHref>
                    <SocialLink>Instagram</SocialLink>
                  </Link>
                  <Link href="/" passHref>
                    <SocialLink>LinkedIn</SocialLink>
                  </Link>
                </SocialTeam>
              </ItemCaption>
            </ItemTeam>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ListTeam;

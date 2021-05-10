import React from 'react';
import Link from 'next/link';
import tw, { styled, css } from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = styled.footer`
  ${tw`w-full bg-gray-100 flex flex-col pt-3`}
  ${css`
    @media screen and (min-width: 1500px) {
      ${tw`flex-1`}
    }
  `}
`;
const WidgetFooter = tw(Grid)` py-8 sm:py-14 xl:py-8 text-gray-400 `;
const Sitemap = tw.div`col-span-full sm:col-span-5 lg:col-span-2 flex flex-col`;
const Title = tw.h5`text-sm mb-1 sm:(text-lg mb-3) text-white uppercase `;
const Flex = tw.div`flex  justify-between`;
const Menu = tw.a`text-gray-400 text-sm sm:text-lg`;
const Ecosystem = tw.div`col-span-full sm:col-span-5 col-start-1 sm:pt-2 lg:(col-span-2 col-end-9 pt-0)`;
const Contact = tw.div`col-span-full text-lg sm:pt-2 lg:(col-span-4 col-end-13 text-base pt-0) flex flex-col`;
const Footer = () => {
  return (
    <Section>
      <Container tw="flex flex-col 2xl:(mt-auto)">
        <WidgetFooter>
          <Sitemap>
            <Title>SITE MAP</Title>
            <Flex>
              <ul tw="space-y-1">
                <li>
                  <Menu>About</Menu>
                </li>
                <li>
                  <Menu>Works</Menu>
                </li>
                <li>
                  <Menu>Contact</Menu>
                </li>
              </ul>
              <ul tw="mr-4 sm:mr-0">
                <li>
                  <Menu>Team</Menu>
                </li>
                <li>
                  <Menu>Jurnal</Menu>
                </li>
              </ul>
            </Flex>
          </Sitemap>
          <Ecosystem>
            <Title>ECOSYSTEM</Title>
            <p tw="font-medium text-sm sm:text-lg">PT Cipta Media Edutama</p>
          </Ecosystem>
          <Contact>
            <Title>CONTACT</Title>
            <p tw="font-semibold lg:font-medium text-sm sm:text-lg">PT Ina Gata Persada</p>
            <address tw="text-sm sm:text-base not-italic mt-4 sm:mt-0">
              Perum Griya Shanta Blok L.110, Malang - Indonesia
              <br />
              Postal code - 65142 <br />
            </address>
            <a href="" tw="text-sm my-1 sm:(text-base mb-1 mt-12) lg:my-1">
              {' '}
              Get Direction Here
            </a>
            <a href="" tw="text-sm sm:text-base my-1">
              +6281 333 666 937
            </a>
            <a href="" tw="text-sm sm:text-base my-1">
              info@inagata.com
            </a>
          </Contact>
        </WidgetFooter>
      </Container>
      <hr tw=" border-black w-full" />
      <Container tw="py-4 sm:(pt-10 pb-8) ">
        <Flex tw="flex-col lg:flex-row">
          <p tw="text-sm sm:text-lg font-normal text-gray-400">2021 INAGATA TECHNOSMITH. All Rights Reserved.</p>
          <span tw="flex justify-between mt-4 lg:(justify-evenly mt-0) w-6/12">
            <a href="" tw="font-semibold uppercase text-sm sm:text-lg opacity-50 text-gray-400 lg:( opacity-100)">
              Instagram
            </a>
            <a href="" tw="font-semibold uppercase text-sm sm:text-lg opacity-50 text-gray-400 lg:( opacity-100)">
              Dribble
            </a>
            <a href="" tw="font-semibold uppercase text-sm sm:text-lg opacity-50 text-gray-400 lg:( opacity-100)">
              Behance
            </a>
          </span>
        </Flex>
      </Container>
    </Section>
  );
};

export default Footer;

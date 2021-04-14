import React from 'react';
import Link from 'next/link';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

const Section = tw.section`w-full bg-gray-100 flex flex-col pt-3`;
const WidgetFooter = tw(Grid)`py-14`;
const Sitemap = tw.div`col-span-2 flex flex-col`;
const Title = tw.h5`text-lg text-white uppercase mb-3`;
const Flex = tw.div`flex justify-between`;
const Menu = tw.a`text-gray-400 text-lg`;
const Ecosystem = tw.div`col-span-2 col-end-8`;
const Contact = tw.div`col-span-4 col-end-13`;
const Footer = () => {
  return (
    <Section>
      <Container tw="flex flex-col">
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
              <ul>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dignissimos dolores, libero in totam reiciendis veniam eius ducimus
            eaque exercitationem officiis pariatur? Nesciunt ab modi ut ex optio
            accusantium fugit.
          </Ecosystem>
          <Contact>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            doloremque eaque reprehenderit ea, totam dolores aliquam fugit
            corporis placeat numquam facilis facere architecto possimus saepe
            libero expedita earum necessitatibus odit.
          </Contact>
        </WidgetFooter>
        <Grid></Grid>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        veniam voluptatem unde illo molestiae adipisci, quisquam ea aspernatur
        assumenda placeat! Exercitationem in sint reiciendis. Alias obcaecati ut
        sunt eveniet a!
      </Container>
    </Section>
  );
};

export default Footer;

import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingThree from '../Typography/HeadingThree';
import TextBody from '../Typography/TextBody';

const Section = tw.section`w-full bg-gray-500 py-20 sm:py-36 `;
const MainContent = tw.div`col-span-full flex-col lg:(col-span-10 col-start-2 flex-row items-start)  flex  `;
const Address = tw.address`min-w-min  mt-24 not-italic sm:(ml-28) lg:ml-auto `;
const LinkContact = tw.a`font-common text-2xl sm:text-4xl lg:text-2xl `;
const Identity = () => {
  return (
    <Section id="identity">
      <Container>
        <Grid>
          <MainContent>
            <img src="/assets/logo/inagata-color.svg" tw="h-24 w-auto" />
            <Address>
              <HeadingThree isCommon tw="font-medium ">
                PT Ina Gata Persada
              </HeadingThree>
              <TextBody isNormal tw="mt-4 mb-6 text-2xl sm:text-4xl lg:text-2xl">
                Perum Griya Shanta Blok L.110, <br />
                Malang - Indonesia
                <br />
                Postal code - 65142{' '}
              </TextBody>
              <LinkContact href="/">+6281 333 666 937</LinkContact>
              <br />
              <LinkContact href="/">info@inagata.com</LinkContact>
            </Address>
          </MainContent>
        </Grid>
      </Container>
    </Section>
  );
};

export default Identity;

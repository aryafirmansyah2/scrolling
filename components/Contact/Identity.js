import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingThree from '../Typography/HeadingThree';
import TextBody from '../Typography/TextBody';

const Section = tw.section`w-full bg-white py-36`;
const MainContent = tw.div`col-span-10 col-start-2 flex items-start `;
const Address = tw.address`min-w-min ml-auto not-italic`;
const LinkContact = tw.a`font-common text-2xl `;
const Identity = () => {
  return (
    <Section id="identity">
      <Container>
        <Grid>
          <MainContent>
            <img src="/assets/logo/inagata-color.svg" tw="h-24 w-auto" />
            <Address>
              <HeadingThree isCommon tw="font-medium">
                PT Ina Gata Persada
              </HeadingThree>
              <TextBody isNormal tw="mt-4 mb-6">
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

import React from 'react';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Container from '../Common/Container';
import Grid from '../Common/Grid';
import HeadingOne from '../Typography/HeadingOne';
import TextBody from '../Typography/TextBody';
import Button from '../Common/Button';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import StaggerChild from '../Animations/StaggerChild';
import FadeInBottom from '../Animations/FadeInBottom';
import Link from 'next/link';

const Section = tw.section`w-full bg-white pt-20 pb-24`;
const ButtonCta = tw(motion.a)`col-span-full lg:col-span-6 px-3 text-center text-black hover:(text-red-500)`;
const Title = tw(HeadingOne)``;
const Subtitle = tw(TextBody)` mt-2`;
const Maping = tw.div`col-span-full h-56 sm:h-screen  flex items-center justify-center mt-20 sm:mt-44`;
const WrapButton = tw.div`col-span-full flex items-center justify-center`;

const center = {
  lat: -7.937626,
  lng: 112.6185181,
};

const containerStyle = {
  width: '100%',
  height: '100%',
};
const Collaboration = () => {
  const router = useRouter();
  const href = 'https://www.google.com/maps/place/Inagata+Technosmith/@-7.937626,112.6185181,18z/data=!4m5!3m4!1s0x2e78820a7aa62187:0x61efb9b531f8a3!8m2!3d-7.9377402!4d112.6195803';
  const handleDirection = e => {
    e.preventDefault();
    router.push(href);
  };
  const urlIntership = 'https://form.typeform.com/to/aPFn81jt';
  const urlPartner = 'https://form.typeform.com/to/V74ualj4';
  const urlCarrier = 'mailto:contact@inagata.com';

  return (
    <Section>
      <Container>
        <InView>
          {({ inView, ref }) => (
            <Grid tw="gap-y-16" ref={ref} variants={StaggerChild} animate={inView && 'show'} initial="hidden">
              <ButtonCta tw="col-start-1" href={urlPartner} variants={FadeInBottom}>
                <Title isWoodland>I’m a partner</Title>
                <Subtitle isNormal>fill out a simple form</Subtitle>
              </ButtonCta>
              <ButtonCta tw="col-end-13" href={urlIntership} variants={FadeInBottom}>
                <Title isWoodland>Intership Program</Title>
                <Subtitle isNormal>Requirement & Downloadebles</Subtitle>
              </ButtonCta>
              <ButtonCta tw="col-start-1 lg:row-start-2" href={urlCarrier} variants={FadeInBottom}>
                <Title isWoodland>Carier</Title>
              </ButtonCta>
              <ButtonCta tw="col-end-13 lg:row-start-2" href={urlCarrier} variants={FadeInBottom}>
                <Title isWoodland>Talks & Workshop</Title>
              </ButtonCta>

              <Maping>
                <LoadScript googleMapsApiKey="AIzaSyBMLfSV2-Zypo78G2yuPP94tPfy9PPZYAA">
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    {/* Child components, such as markers, info windows, etc. */}
                    <Marker position={center}></Marker>
                  </GoogleMap>
                </LoadScript>
              </Maping>
              <WrapButton>
                <Button isSecondary tw="w-8/12 sm:w-4/12" onClick={handleDirection}>
                  Get Direction
                </Button>
              </WrapButton>
            </Grid>
          )}
        </InView>
      </Container>
    </Section>
  );
};

export default Collaboration;

import tw from 'twin.macro';
import ReactPageScroller from 'react-page-scroller';

import Layout from '../components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import CaseStudy from '@/components/Home/CaseStudy';
import StimulusAds from '@/components/Home/StimulusAds';
import CallToAction from '@/components/Home/CallToAction';

import FooterHome from '@/components/Home/FooterHome';
import { Metahead } from '@/components/Metahead';
import React, { useRef } from 'react';

export default function Home() {
  const hero = useRef(null)
  const companyOne = useRef(null)
  const companyTwo = useRef(null)
  const companyThree = useRef(null)
  const companyFour = useRef(null)
  const foter = useRef(null)

  const gotoCommentSection = (element) => {
    element.current.scrollIntoView
      ({
        behavior: "smooth"
      })
  }
  return (
    <>
      <Metahead title="Inagata Technosmith | Homepage" />
      <Layout>
        <main>
          <ReactPageScroller>
            <Hero Click={() => gotoCommentSection(companyOne)} />
            <CaseStudy
              refProp={companyOne}
              Click={() => gotoCommentSection(companyTwo)}
              name={'Integrated and technology-based school management.'}
              company={'Telkom School'}
              color={'hsla(26, 95%, 85%, 1)'}

              img={'/assets/content/hero-project-1.png'}
              // id={'telkom-school'}
              behance={'https://www.behance.net/inagatatechno'}
            />
            <CaseStudy
              refProp={companyTwo}
              Click={() => gotoCommentSection(companyThree)}
              name={'Financial activity management application'}
              company={'Duitkas'}
              color={'hsla(252, 100%, 89%, 1)'}

              img={'/assets/content/hero-project-2.png'}
              // id={'duit-kas'}
              behance={'https://www.behance.net/gallery/120097625/Duitkascom'}
            />
            <CaseStudy
              refProp={companyThree}
              Click={() => gotoCommentSection(companyFour)}
              name={'BNI internet banking personal finance management facility'}
              company={'BNI PFM'}
              color={'hsla(24, 100%, 72%, 1)'}

              img={'/assets/content/hero-project-3.png'}
              // id={'bni-pfm'}
              behance={'https://www.behance.net/inagatatechno'}
            />
            <CaseStudy
              refProp={companyFour}
              Click={() => gotoCommentSection(foter)}
              name={'Official website club activities and store management'}
              company={'Arema FC'}
              color={'hsla(217, 94%, 60%, 1)'}

              img={'/assets/content/hero-project-4.png'}
              // id={'arema-fc'}
              behance={'https://www.behance.net/gallery/120173683/AREMA-FC'}
            />
            <section ref={foter} tw="h-screen flex flex-col pt-20 lg:pt-10">
              <StimulusAds show={true} />
              <CallToAction />
              <FooterHome />
            </section>
          </ReactPageScroller>
        </main>
      </Layout>
    </>
  );
}

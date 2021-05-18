import React, { useState } from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from '../Common/Container';
// Icon
import LogoInagata from '@/assets/logo/inagata.svg';
import IconHamburger from '@/assets/icon/hamburger.svg';
import IconClosse from '@/assets/icon/close-hamburger.svg';
import { AnimatePresence, motion } from 'framer-motion';
import StaggerChild from '../Animations/StaggerChild';
import FadeInBottom from '../Animations/FadeInBottom';
import FadeInTop from '../Animations/FadeInTop';
import FadeIn from '../Animations/FadeIn';

const Nav = tw.nav`w-full bg-transparent fixed top-0 right-0 left-0 z-30`;
const Flex = tw.div`flex justify-between w-full pt-14`;
const BgNavbar = tw(motion.div)`bg-black h-screen w-screen fixed z-20 flex items-center justify-center`;
const ListItem = tw(motion.div)`flex flex-col justify-center items-center`;
const MenuItem = tw.a`w-auto cursor-pointer my-2 text-center leading-tight transition-all font-woodland text-5.5xl font-bold text-white  border-b-2 border-transparent hover:(border-white) relative`;

const SidebarAnime = {
  hidden: {
    opacity: 0,
    width: '0px',
    marginRight: '0px',
  },

  show: {
    opacity: 1,
    width: '100vw',
    marginRight: '1px',
    transition: {
      duration: 1,
      type: 'spring',
      // stiffness: 5,
      // restDelta: 2,
      // The first child will appear AFTER the parrent has appeared on the screen

      // The next sibling will appear 0.5s after the previous one
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
  exit: {
    opacity: 0,
    width: '0px',
    marginRight: '0px',
    transition: {
      duration: 1,
      type: 'spring',
      // stiffness: 20,
      // restDelta: 2,
      // // The first child will appear AFTER the parrent has appeared on the screen
      // // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const Header = () => {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <Nav>
        <Container>
          <Flex>
            <Link href="/">
              <a>
                <LogoInagata tw="h-9 w-9" />
              </a>
            </Link>
            {showNavbar ? <IconClosse tw="h-9 w-9 cursor-pointer" onClick={() => setShowNavbar(!showNavbar)} /> : <IconHamburger tw="h-9 w-9 cursor-pointer" onClick={() => setShowNavbar(!showNavbar)} />}
          </Flex>
        </Container>
      </Nav>
      <AnimatePresence exitBeforeEnter>
        {showNavbar && (
          <BgNavbar variants={SidebarAnime} initial="hidden" animate="show" exit="exit">
            <ListItem>
              <MenuItem as={motion.a} onClick={() => router.push('/').then(() => window.scrollTo(0, 0))}>
                Home
              </MenuItem>

              <MenuItem as={motion.a} onClick={() => router.push('/work').then(() => window.scrollTo(0, 0))}>
                Works
              </MenuItem>

              <MenuItem as={motion.a} onClick={() => router.push('/about').then(() => window.scrollTo(0, 0))}>
                About
              </MenuItem>

              <MenuItem as={motion.a} onClick={() => router.push('/team').then(() => window.scrollTo(0, 0))}>
                Team
              </MenuItem>

              <MenuItem as={motion.a} onClick={() => router.push('/contact').then(() => window.scrollTo(0, 0))}>
                Contact
              </MenuItem>

              {/* <Link href="/">
                <MenuItem as={motion.a} variants={FadeInBottom}>
                  Home
                </MenuItem>
              </Link>
              <Link href="/work">
                <MenuItem as={motion.a} variants={FadeInBottom}>
                  Works
                </MenuItem>
              </Link>
              <Link href="/about">
                <MenuItem as={motion.a} variants={FadeInBottom}>
                  About
                </MenuItem>
              </Link>
              <Link href="/team">
                <MenuItem as={motion.a} variants={FadeInBottom}>
                  Team
                </MenuItem>
              </Link>
              <Link href="/contact">
                <MenuItem as={motion.a} variants={FadeInBottom}>
                  Contact
                </MenuItem>
              </Link> */}
              {/* <MenuItem>Journal</MenuItem> */}
            </ListItem>
          </BgNavbar>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

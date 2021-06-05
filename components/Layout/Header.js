import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from '../Common/Container';
// Icon
import LogoInagata from '@/assets/logo/inagata.svg';
import IconHamburger from '@/assets/icon/hamburger.svg';
import IconClosse from '@/assets/icon/close-hamburger.svg';
import { AnimatePresence, motion } from 'framer-motion';

const Nav = tw.nav`w-full bg-transparent fixed top-0 right-0 left-0 z-30`;
const Flex = tw.div`flex justify-between w-full pt-8 sm:py-7`;
const BgNavbar = tw(motion.div)`bg-black bg-opacity-95 h-screen w-screen fixed z-20 flex items-center justify-center`;
const ListItem = tw(motion.div)`flex flex-col justify-center items-center`;
const MenuItem = tw.a`w-auto cursor-pointer my-2 text-center leading-tight transition-all font-woodland text-5.5xl font-bold text-white   hover:(text-brown-gold) relative`;

const SidebarAnime = {
  hidden: {
    opacity: 0,

    marginBottom: '0px',
    y: 300,
  },

  show: {
    opacity: 1,

    marginBottom: '1px',
    y: 0,
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

    marginBottom: '0px',
    y: -300,
    transition: {
      duration: 1,
      type: 'spring',
      // stiffness: 20,
      // restDelta: 2,

      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const Header = () => {
  const router = useRouter();
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.pageYOffset > 40) {
  //       document.getElementById('navbar').style.display = 'invisible';
  //     } else {
  //       document.getElementById('navbar').style.display = 'visible';
  //     }
  //     // setScrollActive(window.scrollY > 40);
  //   });
  //   // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  //   // if (currentScrollPos > 20) {
  //   //   // I am using 'display' instead of 'top':
  //   //   document.getElementById('navbar').style.display = 'invisible';
  //   // } else {
  //   //   document.getElementById('navbar').style.display = 'visible';
  //   // }
  //   console.log('offset ', window.pageYOffset);
  // }, [pageYOffset]);

  return (
    <>
      <Nav id="navbar">
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
            </ListItem>
          </BgNavbar>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

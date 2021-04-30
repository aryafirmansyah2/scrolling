import React, { useState } from 'react';
import tw from 'twin.macro';
import Link from 'next/link';

import Container from '../Common/Container';
// Icon
import LogoInagata from '@/assets/logo/inagata.svg';
import IconHamburger from '@/assets/icon/hamburger.svg';
import IconClosse from '@/assets/icon/close-hamburger.svg';

const Nav = tw.nav`w-full bg-transparent fixed top-0 right-0 left-0 z-30`;
const Flex = tw.div`flex justify-between w-full pt-14`;
const BgNavbar = tw.div`bg-black h-screen w-screen fixed z-20 flex items-center justify-center`;
const ListItem = tw.div`flex flex-col justify-center items-center`;
const MenuItem = tw.a`w-auto cursor-pointer my-2 text-center leading-tight transition-all font-woodland text-5.5xl font-bold text-white  border-b-2 border-transparent hover:(border-white)`;

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <Nav>
        <Container>
          <Flex>
            <LogoInagata tw="h-9 w-9" />
            {showNavbar ? (
              <IconClosse tw="h-9 w-9 cursor-pointer" onClick={() => setShowNavbar(!showNavbar)} />
            ) : (
              <IconHamburger tw="h-9 w-9 cursor-pointer" onClick={() => setShowNavbar(!showNavbar)} />
            )}
          </Flex>
        </Container>
      </Nav>
      {showNavbar && (
        <BgNavbar>
          <ListItem>
            <Link href="/" passHref>
              <MenuItem>Home</MenuItem>
            </Link>
            <Link href="/work" passHref>
              <MenuItem>Works</MenuItem>
            </Link>
            <Link href="/about" passHref>
              <MenuItem>About</MenuItem>
            </Link>
            <Link href="/team" passHref>
              <MenuItem>Team</MenuItem>
            </Link>
            <Link href="/contact" passHref>
              <MenuItem>Contact</MenuItem>
            </Link>
            <MenuItem>Journal</MenuItem>
          </ListItem>
        </BgNavbar>
      )}
    </>
  );
};

export default Header;

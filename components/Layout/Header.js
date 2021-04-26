import React from 'react';
import tw from 'twin.macro';
import Container from '../Common/Container';
// Icon
import LogoInagata from '@/assets/logo/inagata.svg';
import IconHamburger from '@/assets/icon/hamburger.svg';

const Nav = tw.nav`w-full bg-transparent fixed top-0 right-0 left-0 z-30`;
const Flex = tw.div`flex justify-between w-full pt-14`;

const Header = () => {
  return (
    <Nav>
      <Container>
        <Flex>
          <LogoInagata tw="h-9 w-9" />
          <IconHamburger tw="h-9 w-9" />
        </Flex>
      </Container>
    </Nav>
  );
};

export default Header;

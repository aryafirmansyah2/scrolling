import React from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      {children}
      {router.asPath === '/' ? null : <Footer />}
    </>
  );
};

export default Layout;

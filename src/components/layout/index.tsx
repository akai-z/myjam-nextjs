import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/header';
import NavBar from '@components/nav-bar';
import ActionButtons from '@components/action-buttons';
import { LayoutWrapper, PageWrapper } from './styles';
import Footer from '@components/footer';
import ReactNotification from 'react-notifications-component';
import CartMenu from '@components/cart-menu';

interface Props {
  seo: {
    title: string;
    description?: string;
  };
}

const Layout: React.FC<Props> = ({ seo, children }) => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const [cartMenuState, setCartMenuState] = useState<boolean>(false);

  const handleMenuState = (val: boolean) => setMenuState(val);
  const handleCartMenuState = (val: boolean) => setCartMenuState(val);

  useEffect(() => {
    document.body.style.overflow = menuState || cartMenuState ? 'hidden' : 'initial';
  }, [menuState, cartMenuState]);

  const { title, description } = seo;
  return (
    <LayoutWrapper>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ReactNotification />
      <Header />
      <NavBar isOpen={menuState} setMenuState={handleMenuState} />
      <CartMenu isOpen={cartMenuState} setCartMenuState={handleCartMenuState} />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
      <ActionButtons setMenuState={handleMenuState} setCartMenuState={handleCartMenuState} />
    </LayoutWrapper>
  );
};

export default Layout;

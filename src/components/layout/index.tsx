import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/header';
import NavBar from '@components/nav-bar';
import ActionButtons from '@components/action-buttons';
import { LayoutWrapper, PageWrapper } from './styles';
import Footer from '@components/footer';
import ReactNotification from 'react-notifications-component';
import CartMenu from '@components/cart-menu';
import SEO from '@components/seo';

interface Props {
  title: string;
  description?: string;
  productJsonLd?: {
    productName: string;
    images: Array<string>;
    description?: string;
  };
  isNotFound?: boolean;
}

const Layout: React.FC<Props> = ({ isNotFound = false, ...props }) => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const [cartMenuState, setCartMenuState] = useState<boolean>(false);

  const handleMenuState = (val: boolean) => setMenuState(val);
  const handleCartMenuState = (val: boolean) => setCartMenuState(val);

  useEffect(() => {
    document.body.style.overflow = menuState || cartMenuState ? 'hidden' : 'initial';
  }, [menuState, cartMenuState]);

  return (
    <LayoutWrapper>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content={props.description} />
        <meta name="og:title" content={props.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SEO {...props} />
      <ReactNotification />
      {!isNotFound && (
        <React.Fragment>
          <Header />
          <NavBar isOpen={menuState} setMenuState={handleMenuState} />
          <CartMenu isOpen={cartMenuState} setCartMenuState={handleCartMenuState} />
        </React.Fragment>
      )}
      <PageWrapper isNotFound={isNotFound}>{props.children}</PageWrapper>
      {!isNotFound && (
        <React.Fragment>
          <Footer />
          <ActionButtons setMenuState={handleMenuState} setCartMenuState={handleCartMenuState} />
        </React.Fragment>
      )}
    </LayoutWrapper>
  );
};

export default Layout;

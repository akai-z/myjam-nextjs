import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import algoliaSearch from 'algoliasearch/lite';
import NextProgress from 'nextjs-progressbar';
import { hotjar } from 'react-hotjar';
import * as gtag from 'lib/gtag';
import { useRouter } from 'next/router';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { GlobalStyles } from 'twin.macro';
import 'react-phone-input-2/lib/material.css';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';
import 'react-notion-x/src/styles.css';
import { Global, css } from '@emotion/react';
import '../css/main.css';
import { ViewportProvider, ShoppingCartProvider, CustomerProfileProvider } from '@contexts/index';
import {
  ALGOLIA_APP_ID,
  ALGOLIA_SEARCH_KEY,
  ALGOLIA_INDEX_KEY,
  HJID,
  HJSV,
  APP_ENVIRONMENT,
} from '@config/env';

const searchClient = algoliaSearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

const customStyle = css`
  body {
    font-family: Montserrat, Arial, sans-serif !important;
    background-color: #f7f7f7;
  }
  .notion-viewport {
    display: none;
  }
  .ReactModal__Overlay--after-open {
    z-index: 999;
    .ReactModal__Content--after-open {
      width: 100%;
      height: 100%;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      padding: 0 !important;
    }
  }
  .notion-frame {
    & header,
    & .notion-hash-link {
      display: none;
    }
    & .notion-page {
      width: 100%;
      padding: 25px;
      margin: 0 !important;
      font-family: Montserrat, Arial, sans-serif !important;
    }
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (APP_ENVIRONMENT === 'production') {
      hotjar.initialize(Number(HJID), Number(HJSV));
    }
  }, []);
  return (
    <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_KEY}>
      <Configure hitsPerPage={60} />
      <GlobalStyles />
      <Global styles={customStyle} />
      <CustomerProfileProvider>
        <ShoppingCartProvider>
          <ViewportProvider>
            <NextProgress height={5} />
            <Component {...pageProps} />
          </ViewportProvider>
        </ShoppingCartProvider>
      </CustomerProfileProvider>
    </InstantSearch>
  );
};

export default App;

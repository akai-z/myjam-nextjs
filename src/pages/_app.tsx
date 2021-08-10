import React from 'react';
import { AppProps } from 'next/app';
import algoliaSearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { GlobalStyles } from 'twin.macro';
import 'react-phone-input-2/lib/material.css';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';
import { Global, css } from '@emotion/react';
import {
  ViewportProvider,
  ShoppingCartProvider,
  CustomerProfileProvider,
  StripeProvider,
} from '@contexts/index';
import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY, ALGOLIA_INDEX_KEY } from '@config/env';

const searchClient = algoliaSearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

const customStyle = css`
  body {
    background-color: #f7f7f7;
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
`;
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_KEY}>
      <Configure hitsPerPage={60} />
      <GlobalStyles />
      <Global styles={customStyle} />
      <StripeProvider>
        <CustomerProfileProvider>
          <ShoppingCartProvider>
            <ViewportProvider>
              <Component {...pageProps} />
            </ViewportProvider>
          </ShoppingCartProvider>
        </CustomerProfileProvider>
      </StripeProvider>
    </InstantSearch>
  );
};

export default App;

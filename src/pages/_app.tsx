import React from 'react';
import { AppProps } from 'next/app';
import algoliaSearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { GlobalStyles } from 'twin.macro';
import { Global, css } from '@emotion/react';
import { ViewportProvider, ShoppingCartProvider, CustomerProfileProvider } from '@contexts/index';
import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY, ALGOLIA_INDEX_KEY } from '@config/env';

const searchClient = algoliaSearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_KEY}>
      <Configure hitsPerPage={60} />
      <GlobalStyles />
      <Global
        styles={css`
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
        `}
      />
      <CustomerProfileProvider>
        <ShoppingCartProvider>
          <ViewportProvider>
            <Component {...pageProps} />
          </ViewportProvider>
        </ShoppingCartProvider>
      </CustomerProfileProvider>
    </InstantSearch>
  );
};

export default App;

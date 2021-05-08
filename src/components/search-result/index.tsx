import React, { Fragment, useEffect } from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import Hits from './hits';
import { IS_CLIENT } from '@config/constants';

interface Props {
  searchState: any;
}
const SearchResult: React.FC<Props> = ({ searchState }) => {
  useEffect(() => {
    if (IS_CLIENT) {
      document.body.style.overflow = searchState && searchState.query ? 'hidden' : 'initial';
    }
  }, [searchState]);
  return searchState && searchState.query ? <Hits /> : <Fragment />;
};

export default connectStateResults(SearchResult);

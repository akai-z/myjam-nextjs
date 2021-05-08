import React, { useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Input, Wrapper, SearchIcon, CloseIcon } from './styles';

interface Props {
  currentRefinement: string;
  refine: (value: string) => void;
}

const SearchBox: React.FC<Props> = ({ currentRefinement, refine }) => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input
        type="text"
        placeholder="What are you looking for ?"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
      {currentRefinement && <CloseIcon onClick={() => refine('')} />}
    </Wrapper>
  );
};

export default connectSearchBox(SearchBox);

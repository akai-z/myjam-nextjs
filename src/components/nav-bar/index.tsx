import React from 'react';
import { fetchCategories } from '@lib/queries/categories';
import { Wrapper, NavWrapper, TitleBlock, Title, CloseIcon } from './styles';
import NavItems from './nav-items';

interface Props {
  isOpen: boolean;
  setMenuState: (val: boolean) => void;
}

const NavBar: React.FC<Props> = ({ isOpen, setMenuState }) => {
  const { categories } = fetchCategories();
  return (
    <NavWrapper isOpen={isOpen}>
      <Wrapper>
        <TitleBlock>
          <Title>Categories</Title>
          <CloseIcon onClick={() => setMenuState(false)} />
        </TitleBlock>
        <NavItems isOpen={isOpen} categories={categories} />
      </Wrapper>
    </NavWrapper>
  );
};

export default NavBar;

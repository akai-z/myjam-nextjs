import React from 'react';
import { fetchCategories } from '@lib/queries/categories';
import { Wrapper, NavWrapper, TitleBlock, Title, CloseIcon } from './styles';
import NavItems from './nav-items';

type Props = {
  isOpen: boolean;
  setMenuState: (val: boolean) => void;
};

const NavBar: React.FC<Props> = ({ isOpen, setMenuState }) => {
  const { categories } = fetchCategories();
  const closeMenu = () => setMenuState(false);
  return (
    <NavWrapper isOpen={isOpen}>
      <Wrapper>
        <TitleBlock>
          <Title>Categories</Title>
          <CloseIcon onClick={closeMenu} />
        </TitleBlock>
        <NavItems closeMenu={closeMenu} isOpen={isOpen} categories={categories} />
      </Wrapper>
    </NavWrapper>
  );
};

export default NavBar;

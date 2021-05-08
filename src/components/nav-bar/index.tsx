import React from 'react';
import mockedCategories from '@mocks-data/categories';
import { Wrapper, NavWrapper, TitleBlock, Title, CloseIcon } from './styles';
import NavItems from './nav-items';

interface Props {
  isOpen: boolean;
  setMenuState: (val: boolean) => void;
}

const NavBar: React.FC<Props> = ({ isOpen, setMenuState }) => (
  <NavWrapper isOpen={isOpen}>
    <Wrapper>
      <TitleBlock>
        <Title>Categories</Title>
        <CloseIcon onClick={() => setMenuState(false)} />
      </TitleBlock>
      <NavItems isOpen={isOpen} categoriesList={mockedCategories} />
    </Wrapper>
  </NavWrapper>
);

export default NavBar;

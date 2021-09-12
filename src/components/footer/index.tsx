import React from 'react';
import MainFooter from '@components/main-footer';
import SecondaryFooter from '@components/secondary-footer';
import CategoriesFooter from '@components/categories-footer';
import { Wrapper, FooterWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <CategoriesFooter />
        <MainFooter />
        <SecondaryFooter />
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react';
import MainFooter from '@components/main-footer';
import SecondaryFooter from '@components/secondary-footer';
import { Wrapper, FooterWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <MainFooter />
        <SecondaryFooter />
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;

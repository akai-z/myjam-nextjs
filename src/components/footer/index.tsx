import React from 'react';
import Link from 'next/link';
import { Wrapper, FooterWrapper, LinksWrapper, RouterLink, Text } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <LinksWrapper>
          <Link href="/" passHref>
            <RouterLink>About Us</RouterLink>
          </Link>
          <Link href="/" passHref>
            <RouterLink>Terms & Conditions</RouterLink>
          </Link>
          <Link href="/" passHref>
            <RouterLink>Privacy Policy</RouterLink>
          </Link>
        </LinksWrapper>
        <Text>All rights reserved @2021.</Text>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;

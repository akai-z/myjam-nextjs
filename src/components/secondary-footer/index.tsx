import React from 'react';
import Link from 'next/link';
import { Wrapper, FooterWrapper, LinksWrapper, RouterLink, SocialMediaWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <LinksWrapper>
          <Link href="/" passHref>
            <RouterLink>Terms & Conditions</RouterLink>
          </Link>
          <Link href="/" passHref>
            <RouterLink>Privacy Policy</RouterLink>
          </Link>
        </LinksWrapper>
        <SocialMediaWrapper>
          <a href="#" target="_blank">
            <img src="/images/icon-facebook.svg" alt="facebook page" />
          </a>
          <a href="#" target="_blank">
            <img src="/images/icon-twitter.svg" alt="twitter page" />
          </a>
          <a href="#" target="_blank">
            <img src="/images/icon-instagram.svg" alt="instagram page" />
          </a>
          <a href="#" target="_blank">
            <img src="/images/icon-tiktok.svg" alt="tiktok page" />
          </a>
        </SocialMediaWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;

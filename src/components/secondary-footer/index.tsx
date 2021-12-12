import React from 'react';
import Link from 'next/link';
import { Wrapper, FooterWrapper, LinksWrapper, RouterLink, SocialMediaWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <LinksWrapper>
          <Link href="/terms-and-conditions" passHref>
            <RouterLink>Terms & Conditions</RouterLink>
          </Link>
          <Link href="/privacy" passHref>
            <RouterLink>Privacy Policy</RouterLink>
          </Link>
        </LinksWrapper>
        <SocialMediaWrapper>
          <a rel="noreferrer" href="https://www.facebook.com/MyajmAr" target="_blank">
            <img src="/images/icon-facebook.svg" alt="facebook page" />
          </a>
          <a rel="noreferrer" href="https://twitter.com/MyjamGrocery" target="_blank">
            <img src="/images/icon-twitter.svg" alt="twitter page" />
          </a>
          <a rel="noreferrer" href="https://www.instagram.com/myjamteam/" target="_blank">
            <img src="/images/icon-instagram.svg" alt="instagram page" />
          </a>
          <a rel="noreferrer" href="https://vm.tiktok.com/ZSeJGUU2E/" target="_blank">
            <img src="/images/icon-tiktok.svg" alt="tiktok page" />
          </a>
        </SocialMediaWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;

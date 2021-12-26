import React from 'react';
import Link from 'next/link';
import { Wrapper, FooterWrapper, LinksWrapper, RouterLink, Title } from './styles';

const MainFooter: React.FC = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <LinksWrapper>
          <Title>Help</Title>
          <RouterLink rel="noreferrer" href="https://customer.myjam.co.uk/" target="_blank">
            Track your order
          </RouterLink>
          <Link href="/delivery-information" passHref>
            <RouterLink>Delivery information</RouterLink>
          </Link>
        </LinksWrapper>
        <LinksWrapper>
          <Title>Partner with us</Title>
          <Link href="/connect-your-store" passHref>
            <RouterLink>Connect your store</RouterLink>
          </Link>
          <Link href="/sell-with-us" passHref>
            <RouterLink>Sell with us</RouterLink>
          </Link>
        </LinksWrapper>
        <LinksWrapper>
          <Title>About us</Title>
          <Link href="/about-us" passHref>
            <RouterLink>Team</RouterLink>
          </Link>
        </LinksWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default MainFooter;

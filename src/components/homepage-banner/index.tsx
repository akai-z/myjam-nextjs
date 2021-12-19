import React from 'react';
import Link from 'next/link';
import { Wrapper, ArrowIcon, Title, RouterLink } from './styles';

const HomeBanner: React.FC = () => {
  return (
    <Wrapper>
      <Title>Your favourite</Title>
      <Title>Halal lamb, delivered.</Title>
      <Link href="/category/lamb" passHref>
        <RouterLink>
          <span>Order Now</span>
          <ArrowIcon />
        </RouterLink>
      </Link>
    </Wrapper>
  );
};

export default HomeBanner;

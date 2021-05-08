import React from 'react';
import Link from 'next/link';
import { Wrapper, ArrowIcon, Title, RouterLink } from './styles';

const HomeBanner: React.FC = () => {
  return (
    <Wrapper>
      <Title>Stay home & get</Title>
      <Title>your daily need's</Title>
      <Link href="/" passHref>
        <RouterLink>
          <span>Order Now</span>
          <ArrowIcon />
        </RouterLink>
      </Link>
    </Wrapper>
  );
};

export default HomeBanner;

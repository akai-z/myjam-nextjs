import React, { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MiniCart from '@components/mini-cart';
import SearchBox from '@components/search-box';
import { Wrapper, HeaderWrapper, Grid, RouterLink } from './styles';
import { IS_CLIENT } from '@config/constants';
import SearchResult from '@components/search-result';
import { imgUrlBuilder } from '@utils/helper';

const Header: FC = () => {
  const [pageScroll, setScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (IS_CLIENT) {
      const val = window.scrollY;
      setScroll(val > 54);
    }
  };

  useEffect(() => {
    if (IS_CLIENT) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => (IS_CLIENT ? window.removeEventListener('scroll', handleScroll) : undefined);
  }, []);

  return (
    <HeaderWrapper scroll={pageScroll}>
      <Wrapper>
        <Grid>
          <div>
            <Link href="/" passHref>
              <RouterLink>
                <Image src={imgUrlBuilder('logo.svg')} height={70} width={70} alt="MY JAM Logo" />
              </RouterLink>
            </Link>
          </div>
          <SearchBox />
          <MiniCart />
        </Grid>
      </Wrapper>
      <SearchResult />
    </HeaderWrapper>
  );
};

export default Header;

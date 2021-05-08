import React from 'react';
import Link from 'next/link';
import { Wrapper, CartIcon, HomeIcon, TagIcon, MenuIcon, RouterLink } from './styles';

interface Props {
  setMenuState: (val: boolean) => void;
}

const ActionButtons: React.FC<Props> = ({ setMenuState }) => {
  return (
    <Wrapper>
      <div>
        <Link href="/" passHref>
          <RouterLink>
            <HomeIcon />
          </RouterLink>
        </Link>
      </div>
      <div>
        <Link href="/category/offers" passHref>
          <RouterLink>
            <TagIcon />
          </RouterLink>
        </Link>
      </div>
      <div>
        <CartIcon />
      </div>
      <div>
        <MenuIcon onClick={() => setMenuState(true)} />
      </div>
    </Wrapper>
  );
};

export default ActionButtons;

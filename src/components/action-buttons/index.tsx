import React from 'react';
import Link from 'next/link';
import { Wrapper, CartIcon, HomeIcon, TagIcon, MenuIcon, RouterLink, Qty } from './styles';
import { useShoppingCart } from '@contexts/shopping-cart';
import { calculateTotalQuantity } from '@contexts/shopping-cart/helper';

interface Props {
  setMenuState: (val: boolean) => void;
  setCartMenuState: (val: boolean) => void;
}

const ActionButtons: React.FC<Props> = ({ setMenuState, setCartMenuState }) => {
  const { items } = useShoppingCart();
  const totalQty = calculateTotalQuantity(items);
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
      <div onClick={() => setCartMenuState(true)}>
        {totalQty > 0 && <Qty>{totalQty}</Qty>}
        <CartIcon />
      </div>
      <div>
        <MenuIcon onClick={() => setMenuState(true)} />
      </div>
    </Wrapper>
  );
};

export default ActionButtons;

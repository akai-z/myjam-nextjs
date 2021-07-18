import React from 'react';
import { Wrapper, CartIcon, Qty } from './styles';
import { useShoppingCart } from '@contexts/shopping-cart';
import { calculateTotalQuantity } from '@contexts/shopping-cart/helper';

const MiniCart: React.FC = () => {
  const { items } = useShoppingCart();
  const totalQty = calculateTotalQuantity(items);
  return (
    <Wrapper>
      {totalQty > 0 && <Qty>{totalQty}</Qty>}
      <CartIcon />
    </Wrapper>
  );
};

export default MiniCart;

import React, { useEffect, useState } from 'react';
import CartModal from '@components/cart-modal';
import { Wrapper, CartIcon, Qty } from './styles';
import { useShoppingCart } from '@contexts/shopping-cart';
import { calculateTotalQuantity } from '@contexts/shopping-cart/helper';
import { IS_CLIENT } from '@config/constants';

const MiniCart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useShoppingCart();
  const totalQty = calculateTotalQuantity(items);

  useEffect(() => {
    if (IS_CLIENT) {
      document.body.style.overflow = isOpen ? 'hidden' : 'initial';
    }
  }, [isOpen]);

  return (
    <Wrapper>
      {totalQty > 0 && <Qty>{totalQty}</Qty>}
      <CartIcon onClick={() => setIsOpen(true)} />
      <CartModal isOpen={isOpen} onVisibilityChange={(state) => setIsOpen(state)} />
    </Wrapper>
  );
};

export default MiniCart;

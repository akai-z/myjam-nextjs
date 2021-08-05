import React from 'react';
import { useShoppingCart } from '@contexts/shopping-cart';
import { priceFormatter } from '@utils/helper';
import CartItem from '@components/cart-item';
import { removeItemAction, updateItemSubstituteAction } from '@contexts/shopping-cart/actions';
import CheckoutBlock from '@components/checkout-block';
import {
  Wrapper,
  CloseIcon,
  Title,
  TitleBlock,
  AmountBlock,
  ItemsWrapper,
  CartWrapper,
} from './styles';

interface Props {
  isOpen: boolean;
  setCartMenuState: (state: boolean) => void;
}

const CartMenu: React.FC<Props> = ({ isOpen, setCartMenuState }) => {
  const { items, amount, dispatch } = useShoppingCart();

  const handleClose = () => setCartMenuState(false);

  const handleRemoveItem = (id) => () => dispatch(removeItemAction(id));

  const handleItemSubState = (id) => (state: boolean) =>
    dispatch(updateItemSubstituteAction(id, state));

  return (
    <CartWrapper isOpen={isOpen}>
      <Wrapper>
        <TitleBlock>
          <Title>Cart</Title>
          <CloseIcon onClick={handleClose} />
        </TitleBlock>
        <AmountBlock>
          <h3>Total Amount:</h3>
          <h3>{priceFormatter(amount)}</h3>
        </AmountBlock>
        <ItemsWrapper>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleItemSubState={handleItemSubState(item.id)}
              handleRemoveItem={handleRemoveItem(item.id)}
            />
          ))}
        </ItemsWrapper>
        {amount > 0 && <CheckoutBlock isMobile={true} />}
      </Wrapper>
    </CartWrapper>
  );
};

export default CartMenu;

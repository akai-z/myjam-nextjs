import React from 'react';
import ReactModal from 'react-modal';
import {
  Wrapper,
  CloseIcon,
  HeadBlock,
  Title,
  Block,
  ColoredBlock,
  AmountBlock,
  ItemsWrapper,
} from './styles';
import { useShoppingCart } from '@contexts/shopping-cart';
import { priceFormatter } from '@utils/helper';
import CartItem from '@components/cart-item';
import { removeItemAction, updateItemSubstituteAction } from '@contexts/shopping-cart/actions';
import CheckoutBlock from '@components/checkout-block';

interface Props {
  isOpen: boolean;
  onVisibilityChange: (state: boolean) => void;
}

ReactModal.setAppElement('#__next');

const CartModal: React.FC<Props> = ({ isOpen, onVisibilityChange }) => {
  const { items, amount, dispatch } = useShoppingCart();

  const handleClose = () => onVisibilityChange(false);
  const handleRemoveItem = (id) => () => dispatch(removeItemAction(id));

  const handleItemSubState = (id) => (state: boolean) =>
    dispatch(updateItemSubstituteAction(id, state));

  return (
    <ReactModal isOpen={isOpen} onRequestClose={handleClose}>
      <Wrapper>
        <Block>
          <HeadBlock>
            <Title>Cart</Title>
            <CloseIcon onClick={handleClose} />
          </HeadBlock>
        </Block>
        <ColoredBlock>
          <Block>
            <AmountBlock>
              <h3>Total Amount:</h3>
              <h3>{priceFormatter(amount)}</h3>
            </AmountBlock>
          </Block>
        </ColoredBlock>
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
      </Wrapper>
      {amount > 0 && <CheckoutBlock />}
    </ReactModal>
  );
};

export default CartModal;

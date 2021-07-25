import React from 'react';
import ReactModal from 'react-modal';
import { Wrapper, CloseIcon, HeadBlock, Title, Block, ColoredBlock, AmountBlock } from './styles';
import { useShoppingCart } from '@contexts/shopping-cart';
import { priceFormatter } from '@utils/helper';
import CartItem from '@components/cart-item';

interface Props {
  isOpen: boolean;
  onVisibilityChange: (state: boolean) => void;
}

const CartModal: React.FC<Props> = ({ isOpen, onVisibilityChange }) => {
  const { items, amount } = useShoppingCart();

  const handleClose = () => onVisibilityChange(false);

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
        <Block>
          {items.map((item) => (
            <CartItem item={item} />
          ))}
        </Block>
      </Wrapper>
    </ReactModal>
  );
};

export default CartModal;

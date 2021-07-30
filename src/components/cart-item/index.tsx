import React from 'react';
import {
  Wrapper,
  DetailsWrapper,
  Price,
  ActionsBlock,
  Name,
  TextBlock,
  TotalPrice,
  DeleteItem,
  XIcon,
  Img,
} from './styles';
import { priceFormatter } from '@utils/helper';
import AddToCart from '@components/add-to-cart';

interface Props {
  item: CartItem;
  handleRemoveItem: () => void;
}

const CartItem: React.FC<Props> = ({ item, handleRemoveItem }) => (
  <Wrapper>
    <DeleteItem onClick={handleRemoveItem}>
      <XIcon />
    </DeleteItem>
    <Img src={item.main_image} alt={item.name} />
    <DetailsWrapper>
      <TextBlock>
        <Name>{item.name}</Name>
        <Price>Unit Price: {priceFormatter(item.price)}</Price>
      </TextBlock>
      <ActionsBlock>
        <TotalPrice>{priceFormatter(item.price * item.quantity)}</TotalPrice>
        <AddToCart size="small" item={item} onAddItem={() => {}} />
      </ActionsBlock>
    </DetailsWrapper>
  </Wrapper>
);

export default CartItem;

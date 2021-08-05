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
import { CheckBoxField } from '@components/fields';

interface Props {
  item: CartItem;
  handleRemoveItem: () => void;
  handleItemSubState: (val: boolean) => void;
}

const CartItem: React.FC<Props> = ({ item, handleRemoveItem, handleItemSubState }) => (
  <Wrapper>
    <DeleteItem onClick={handleRemoveItem}>
      <XIcon />
    </DeleteItem>
    <Img src={item.main_image} alt={item.name} />
    <DetailsWrapper>
      <TextBlock>
        <Name>{item.name}</Name>
        <Price>Unit Price: {priceFormatter(item.price)}</Price>
        <CheckBoxField
          label="Accept Substitute"
          value={item.acceptSubstitute}
          onChange={handleItemSubState}
        />
      </TextBlock>
      <ActionsBlock>
        <TotalPrice>{priceFormatter(item.price * item.quantity)}</TotalPrice>
        <AddToCart size="small" item={item} onAddItem={() => {}} />
      </ActionsBlock>
    </DetailsWrapper>
  </Wrapper>
);

export default CartItem;

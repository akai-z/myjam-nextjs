import React from 'react';
import _toNumber from 'lodash/toNumber';
import { Wrapper } from './styles';
import Item from '@components/item';

type Props = {
  itemsList: Array<Item>;
};

const ItemsGrid: React.FC<Props> = ({ itemsList }) => (
  <Wrapper>
    {itemsList.map((item) => (
      <Item
        key={item.id}
        slug={item.slug}
        image={item.thumbnail_image}
        name={item.name}
        price={_toNumber(item.price)}
        specialPrice={_toNumber(item.special_price || 0)}
        id={item.id}
      />
    ))}
  </Wrapper>
);

export default ItemsGrid;

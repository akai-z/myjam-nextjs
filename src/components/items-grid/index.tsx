import React from 'react';
import { Wrapper } from './styles';
import Item from '@components/item';

interface Props {
  itemsList: Array<Item>;
}

const ItemsGrid: React.FC<Props> = ({ itemsList }) => (
  <Wrapper>
    {itemsList.map((item) => (
      <Item
        key={item.id}
        slug={item.fields.slug}
        image={item.fields.thumbnail_image}
        name={item.fields.name}
        price={item.fields.price}
        specialPrice={item.fields.special_price || 0}
        id={item.id}
      />
    ))}
  </Wrapper>
);

export default ItemsGrid;

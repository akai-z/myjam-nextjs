import React from 'react';
import { Wrapper } from './styles';
import Item from '@components/item';

interface Props {
  itemsList: Array<Item>;
}

const ItemsGrid: React.FC<Props> = ({ itemsList }) => (
  <Wrapper>
    {itemsList.map((item, index) => (
      <Item
        key={index}
        slug={item.fields.slug}
        image={item.fields.thumbnail_image}
        name={item.fields.name}
        price={item.fields.price}
        id={item.id}
      />
    ))}
  </Wrapper>
);

export default ItemsGrid;

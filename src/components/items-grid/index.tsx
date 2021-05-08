import React from 'react';
import mockedItems from '@mocks-data/items';
import { Wrapper } from './styles';
import Item from '@components/item';

interface Props {
  itemsList: Array<Item>;
}

const ItemsGrid: React.FC<Props> = ({ itemsList }) => {
  const items: Array<Item> = Array(itemsList.length).fill(mockedItems[0]);
  return (
    <Wrapper>
      {items.map((item, index) => (
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
};

export default ItemsGrid;

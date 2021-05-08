import React from 'react';
import { Wrapper, Title } from './styles';
import ItemsGrid from '@components/items-grid';

interface Props {
  category: Category;
  itemsList: Array<Item>;
}

const Category: React.FC<Props> = ({ category, itemsList }) => {
  const items = Array(50).fill(itemsList[0]);
  return (
    <Wrapper>
      <Title>{category.fields.name}</Title>
      <ItemsGrid itemsList={items} />
    </Wrapper>
  );
};

export default Category;

import React from 'react';
import { Wrapper, Title } from './styles';
import ItemsGrid from '@components/items-grid';

interface Props {
  category: Category;
  itemsList: Array<Item>;
}

const Category: React.FC<Props> = ({ category, itemsList }) => (
  <Wrapper>
    <Title>{category.fields.name}</Title>
    <ItemsGrid itemsList={itemsList} />
  </Wrapper>
);

export default Category;

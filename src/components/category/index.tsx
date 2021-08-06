import React, { useEffect, useState } from 'react';
import { Wrapper, Title, LoadMore } from './styles';
import ItemsGrid from '@components/items-grid';
import { fetchCategoryItems } from '@lib/queries/items';
import Loader from '@components/loader';

interface Props {
  category: Category;
}

const Category: React.FC<Props> = ({ category }) => {
  const [initialRender, setInitialRender] = useState(false);
  const [offsetId, setOffsetId] = useState('');
  const [itemsList, setItemsList] = useState<Array<Item>>([]);

  const { items, offset, isLoading } = fetchCategoryItems(category.fields.slug, offsetId);

  const handleLoadMore = (id: string) => () => setOffsetId(id);

  useEffect(() => {
    if (!isLoading) {
      setInitialRender(true);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && items.length > 0) {
      setItemsList((preState) => [...preState, ...items]);
    }
  }, [isLoading, items]);

  return (
    <Wrapper>
      <Title>{category.fields.name}</Title>
      {initialRender ? <ItemsGrid itemsList={itemsList} /> : <Loader loading={true} size={15} />}
      {(offset || isLoading) && initialRender && (
        <LoadMore onClick={handleLoadMore(offset as string)}>
          {isLoading ? <Loader loading={true} size={5} color={'#FFF'} /> : 'Load More'}
        </LoadMore>
      )}
    </Wrapper>
  );
};

export default Category;

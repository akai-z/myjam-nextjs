import React, { useEffect, useState } from 'react';
import _uniqueBy from 'lodash/unionBy';
import { Wrapper, Title, LoadMore } from './styles';
import ItemsGrid from '@components/items-grid';
import { fetchCategoryItems } from '@lib/queries/items';
import Loader from '@components/loader';

type Props = {
  category: Category;
  records: Array<Item>;
  totalCount: number;
  pageSize: number;
};

const Category: React.FC<Props> = ({ category, records, totalCount, pageSize }) => {
  const [initialRender, setInitialRender] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsList, setItemsList] = useState<Array<Item>>([]);

  const { items, isLoading } = fetchCategoryItems(category.fields.slug, pageNumber, pageSize, {
    initialData: records,
  });

  const handleLoadMore = () => setPageNumber(pageNumber + 1);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setInitialRender(true);
      }, 0);
    }
  }, [isLoading]);

  useEffect(() => {
    setPageNumber(1);
    setItemsList([]);
  }, [category]);

  useEffect(() => {
    if (!isLoading && items.length > 0) {
      setTimeout(() => {
        setItemsList((preState) => _uniqueBy([...preState, ...items], 'id'));
      }, 0);
    }
  }, [isLoading, items]);

  return (
    <Wrapper>
      <Title>{category.fields.name}</Title>
      {initialRender ? <ItemsGrid itemsList={itemsList} /> : <Loader loading={true} size={15} />}
      {(totalCount > pageNumber * pageSize || isLoading) && initialRender && (
        <LoadMore onClick={handleLoadMore}>
          {isLoading ? <Loader loading={true} size={5} color={'#FFF'} /> : 'Load More'}
        </LoadMore>
      )}
    </Wrapper>
  );
};

export default Category;

import useSWR from 'swr';
import { fetcher } from '@utils/helper';

export const fetchItemsBasedType = (type: string) => {
  const { data, error } = useSWR<Array<Item>>(`/api/product-list?type=${type}`, fetcher);

  return {
    items: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const fetchCategoryItems = (slug: string, offset?: string, options?: any) => {
  let url = `/api/category-product-list/${slug}`;
  if (offset) {
    url = url.concat(`?offset=${encodeURI(offset)}`);
  }
  const { data, error } = useSWR<ItemsList>(url, fetcher, options || {});

  return {
    items: data?.records || [],
    offset: data?.offset,
    isLoading: !error && !data,
    isError: error,
  };
};

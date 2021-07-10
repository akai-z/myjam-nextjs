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

export const fetchCategoryItems = (slug: string, offset?: string) => {
  let url = `/api/category-product-list?category-slug=${slug}`;
  if (offset) {
    url = url.concat(`/offset/${encodeURI(offset)}`);
  }
  const { data, error } = useSWR<ItemsList>(url, fetcher);

  return {
    items: data?.records || [],
    isLoading: !error && !data,
    isError: error,
  };
};

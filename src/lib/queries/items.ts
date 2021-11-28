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

export const fetchCustomOptions = () => {
  const { data, error } = useSWR<Array<CustomOption>>('/api/product-option-list', fetcher);

  return {
    optionsList: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const fetchCategoryItems = (
  slug: string,
  pageNumber: number,
  pageSize: number,
  options?: any,
) => {
  const url = `/api/proxied-category-product-list/${slug}?page-number=${pageNumber}&page-size=${pageSize}`;
  const { data, error } = useSWR<ItemsList>(url, fetcher, options || {});

  return {
    items: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

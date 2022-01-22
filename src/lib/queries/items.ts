import useSWR from 'swr';
import { fetcher } from '@utils/helper';

export const fetchItemsBasedType = (type: string) => {
  const { data, error, isValidating } = useSWR<Array<Item>>(
    `/api/product-list?type=${type}`,
    fetcher,
  );

  return {
    items: data || [],
    isLoading: isValidating,
    isError: error,
  };
};

export const fetchCustomOptions = () => {
  const { data, error, isValidating } = useSWR<Array<CustomOption>>(
    '/api/product-option-list',
    fetcher,
  );

  return {
    optionsList: data || [],
    isLoading: isValidating,
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
  const { data, error, isValidating } = useSWR<ItemsList>(url, fetcher, options || {});

  return {
    items: data || [],
    isLoading: isValidating,
    isError: error,
  };
};

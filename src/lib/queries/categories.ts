import useSWR from 'swr';
import { fetcher } from '@utils/helper';
import { API_URL } from '@config/env';

export const fetchCategories = () => {
  const { data, error } = useSWR<Array<Category>>(`${API_URL}/category-list`, fetcher);

  return {
    categories: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const fetchCategoryBySlug = (slug: string) => {
  const { data, error } = useSWR<Array<Category>>(`${API_URL}/api/category/${slug}`, fetcher);

  return {
    categories: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

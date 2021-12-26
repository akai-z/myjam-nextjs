import useSWR from 'swr';
import { fetcher } from '@utils/helper';

export const fetchCategories = () => {
  const { data, error } = useSWR<Array<Category>>(`/api/category-list`, fetcher);

  return {
    categories: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const fetchCategoryBySlug = (slug: string) => {
  const { data, error } = useSWR<Array<Category>>(`/api/category/${slug}`, fetcher);

  return {
    categories: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

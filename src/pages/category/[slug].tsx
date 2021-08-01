import React from 'react';
import Layout from '@components/layout';
import Category from '@components/category';
import items from '@mocks-data/items';
import { GetServerSideProps } from 'next';
import { API_URL } from '@config/env';
import { fetchCategoryItems } from '@lib/queries/items';

interface Props {
  category: Category;
}

const CategoryPage: React.FC<Props> = ({ category }) => {
  const { items } = fetchCategoryItems(category.fields.slug);
  return (
    <Layout seo={{ title: category.fields.name, description: category.fields.description }}>
      <Category category={category} itemsList={items} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-ignore
  const response = await fetch(`${API_URL}/category/${params.slug}`);
  const data = await response.json();
  return {
    props: {
      category: data,
    },
  };
};

export default CategoryPage;

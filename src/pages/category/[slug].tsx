import React from 'react';
import Layout from '@components/layout';
import Category from '@components/category';
import { GetServerSideProps } from 'next';
import { API_URL } from '@config/env';

interface Props {
  category: Category;
}

const CategoryPage: React.FC<Props> = ({ category }) => {
  return (
    <Layout seo={{ title: category.fields.name, description: category.fields.description }}>
      <Category category={category} />
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

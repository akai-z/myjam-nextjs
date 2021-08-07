import React from 'react';
import Layout from '@components/layout';
import Category from '@components/category';
import { GetServerSideProps } from 'next';
import { API_URL } from '@config/env';

interface Props {
  category: Category;
  records: Array<Item>;
  offset?: string;
}

const CategoryPage: React.FC<Props> = ({ category, records, offset }) => {
  return (
    <Layout seo={{ title: category.fields.name, description: category.fields.description }}>
      <Category category={category} records={records} offsetRecord={offset} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-ignore
  const response = await fetch(`${API_URL}/category/${params.slug}`);
  const category = await response.json();

  // @ts-ignore
  const itemsResponse = await fetch(`${API_URL}/category-product-list/${params.slug}`);
  const { records, offset = null } = await itemsResponse.json();
  return {
    props: {
      category,
      records,
      offset,
    },
  };
};

export default CategoryPage;

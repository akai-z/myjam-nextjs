import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@components/layout';
import Category from '@components/category';
import { API_URL } from '@config/env';
import Loader from '@components/loader';

interface Props {
  category: Category;
  records: Array<Item>;
  offset?: string;
}

const CategoryPage: React.FC<Props> = ({ category, records, offset }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout title="MY JAM" description="We support local">
        <Loader loading={true} size={15} />
      </Layout>
    );
  }

  return (
    <Layout title={category.fields.name} description={category.fields.description}>
      <Category category={category} records={records} offsetRecord={offset} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${API_URL}/category-list`);
  const categories = await response.json();

  const paths = categories.map((category: Category) => ({
    params: {
      slug: category.fields.slug,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${API_URL}/category/${params?.slug}`);
  const category = await response.json();

  const itemsResponse = await fetch(`${API_URL}/category-product-list/${params?.slug}`);
  const { records = [], offset = null } = await itemsResponse.json();
  return {
    revalidate: 10,
    props: {
      category,
      records,
      offset,
    },
  };
};

export default CategoryPage;

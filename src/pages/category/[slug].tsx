import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@components/layout';
import Category from '@components/category';
import { API_URL } from '@config/env';
import Loader from '@components/loader';

type Props = {
  category: Category;
  records: Array<Item>;
  count: number;
  pageSize: number;
};

const CategoryPage: React.FC<Props> = ({ category, records, count, pageSize }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout title="Myjam - Cultural Grocery" description="We support local">
        <Loader loading={true} size={15} />
      </Layout>
    );
  }

  return (
    <Layout title={category.fields.name} description={category.fields.description}>
      <Category category={category} records={records} totalCount={count} pageSize={pageSize} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${API_URL}/category-list`);
  const categories = await response.json();

  const paths = categories
    .filter((category: Category) => category.fields.status === 'enabled')
    .map((category: Category) => ({
      params: {
        slug: category.fields.slug,
      },
    }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${API_URL}/category/${params?.slug}`);
  if (response.status === 404) {
    return {
      redirect: {
        destination: '/not-found',
        permanent: false,
      },
    };
  }
  const category = await response.json();

  const pageSize = 60;
  const itemsResponse = await fetch(
    `${API_URL}/proxied-category-product-list/${params?.slug}?page-size=${pageSize}`,
  );
  const itemsCountResponse = await fetch(
    `${API_URL}/proxied-category-product-list/${params?.slug}?size`,
  );
  const records = await itemsResponse.json();
  const { count = 0 } = await itemsCountResponse.json();
  return {
    revalidate: 300,
    props: {
      category,
      pageSize,
      records,
      count,
    },
  };
};

export default CategoryPage;

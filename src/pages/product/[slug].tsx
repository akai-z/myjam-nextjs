import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@components/layout';
import Product from '@components/product';
import { API_URL } from '@config/env';
import Loader from '@components/loader';

interface Props {
  item: Item;
  optionsList: Array<CustomOption>;
}

const ProductPage: React.FC<Props> = ({ item, optionsList }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout seo={{ title: '' }}>
        <Loader loading={true} size={15} />
      </Layout>
    );
  }

  return (
    <Layout seo={{ title: item.fields.name, description: item.fields.description }}>
      <Product optionsList={optionsList} item={item} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${API_URL}/product-list`);
  const products = await response.json();

  const paths = products.map((product: Item) => ({
    params: {
      slug: product.fields.slug,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${API_URL}/product/${params?.slug}`);
  const item = await response.json();

  const optionsListResponse = await fetch(`${API_URL}/product-option-list`);
  const optionsList = await optionsListResponse.json();
  return {
    revalidate: 10,
    props: {
      item,
      optionsList,
    },
  };
};

export default ProductPage;

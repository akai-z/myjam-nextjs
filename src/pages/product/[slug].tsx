import React from 'react';
import Layout from '@components/layout';
import Product from '@components/product';
import { GetServerSideProps } from 'next';
import { API_URL } from '@config/env';

interface Props {
  item: Item;
  optionsList: Array<CustomOption>;
}

const ProductPage: React.FC<Props> = ({ item, optionsList }) => {
  return (
    <Layout seo={{ title: item.fields.name, description: item.fields.description }}>
      <Product optionsList={optionsList} item={item} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // @ts-ignore
  const response = await fetch(`${API_URL}/product?slug=${params.slug}`);
  const item = await response.json();

  const optionsListResponse = await fetch(`${API_URL}/product-option-list`);
  const optionsList = await optionsListResponse.json();
  return {
    props: {
      item,
      optionsList,
    },
  };
};

export default ProductPage;

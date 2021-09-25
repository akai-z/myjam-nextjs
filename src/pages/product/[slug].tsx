import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@components/layout';
import Product from '@components/product';
import { API_URL } from '@config/env';
import Loader from '@components/loader';

type Props = {
  item: Item;
  optionsList: Array<CustomOption>;
};

const ProductPage: React.FC<Props> = ({ item, optionsList }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout title="MY JAM" description="We support local">
        <Loader loading={true} size={15} />
      </Layout>
    );
  }

  const seoProps = {
    title: item.fields.name,
    description: item.fields.description,
    productJsonLd: {
      productName: item.fields.name,
      description: item.fields.description,
      images: [item.fields.thumbnail_image],
    },
  };

  return (
    <Layout {...seoProps}>
      <Product optionsList={optionsList} item={item} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${API_URL}/product-list`);
  let products = [];
  let { records = [], offset = null } = await response.json();

  products = products.concat(...records);

  while (offset) {
    const res = await fetch(`${API_URL}/product-list?offset=${offset}`);
    const { records: tmpRecords = [], offset: tmpOffset = null } = await res.json();
    products = products.concat(...tmpRecords);
    offset = tmpOffset;
  }

  const paths = products
    .filter((product: Item) => product.fields.status === 'enabled')
    .map((product: Item) => ({
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
    revalidate: 60,
    props: {
      item,
      optionsList,
    },
  };
};

export default ProductPage;

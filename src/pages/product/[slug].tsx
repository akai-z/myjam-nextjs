import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@components/layout';
import Product from '@components/product';
import { API_URL, APP_ENVIRONMENT } from '@config/env';
import Loader from '@components/loader';

type Props = {
  item: Item;
  optionsList: Array<CustomOption>;
};

const ProductPage: React.FC<Props> = ({ item, optionsList }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout title="Myjam - Cultural Grocery" description="We support local">
        <Loader loading={true} size={15} />
      </Layout>
    );
  }

  const seoProps = {
    title: item.name,
    description: item.description,
    productJsonLd: {
      productName: item.name,
      description: item.description,
      images: [item.thumbnail_image],
    },
  };

  return (
    <Layout {...seoProps}>
      <Product optionsList={optionsList} item={item} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let products = [];
  let pageNumber = 1;
  const pageSize = 100;
  const response = await fetch(
    `${API_URL}/proxied-product-list?page-size=${pageSize}&page-number=${pageNumber}`,
  );
  let records = await response.json();

  const countResponse = await fetch(`${API_URL}/proxied-product-list?size`);
  const { count = 0 } = await countResponse.json();

  products = products.concat(...records);

  while (count > pageNumber * pageSize && APP_ENVIRONMENT === 'production') {
    const res = await fetch(
      `${API_URL}/proxied-product-list?page-size=${pageSize}&page-number=${pageNumber}`,
    );
    const tmpRecords = await res.json();
    products = products.concat(...tmpRecords);
    pageNumber++;
  }

  const paths = products
    .filter((product: Item) => product.status === 'enabled')
    .map((product: Item) => ({
      params: {
        slug: product.slug,
      },
    }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${API_URL}/proxied-product/${params?.slug}`);
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

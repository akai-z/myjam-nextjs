import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Layout from '@components/layout';
import Product from '@components/product';
import { APP_URL } from '@config/env';
import Loader from '@components/loader';
import NotFound from '@components/not-found';

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

  if (item.status === 'disabled') {
    return (
      <Layout title="Page Not Found" description="Page not found" isNotFound={true}>
        <NotFound />
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(`${APP_URL}/proxied-product/${params?.slug}`);
  const item = await response.json();

  const optionsListResponse = await fetch(`${APP_URL}/product-option-list`);
  const optionsList = await optionsListResponse.json();
  return {
    props: {
      item,
      optionsList,
    },
  };
};

export default ProductPage;

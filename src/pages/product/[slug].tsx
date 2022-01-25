import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@components/layout';
import Product from '@components/product';
import Loader from '@components/loader';
import NotFound from '@components/not-found';
import ProxiedProduct from '@catalog-service/proxied-product';

type Props = {
  item: Item;
};

const ProductPage: React.FC<Props> = ({ item }) => {
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
      <Product item={item} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let products = [];
  let pageNumber = 1;
  const pageSize = 100;
  const records = await ProxiedProduct.list(pageNumber, pageSize);

  const { count = 0 } = await ProxiedProduct.listSize();

  products = products.concat(...records);

  while (Number(count) > pageNumber * pageSize) {
    const tmpRecords = await ProxiedProduct.list(pageNumber, pageSize);
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
  try {
    const item = await ProxiedProduct.record(params?.slug);

    return {
      revalidate: 300,
      props: {
        item,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/not-found',
        permanent: false,
      },
    };
  }
};

export default ProductPage;

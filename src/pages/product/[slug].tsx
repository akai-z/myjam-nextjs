import React from 'react';
import Layout from '@components/layout';
import Product from '@components/product';
import items from '@mocks-data/items';

const ProductPage = () => (
  <Layout seo={{ title: 'MY JAM' }}>
    <Product item={items[0]} />
  </Layout>
);

export default ProductPage;

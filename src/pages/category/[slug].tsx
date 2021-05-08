import React from 'react';
import Layout from '@components/layout';
import Category from '@components/category';
import categories from '@mocks-data/categories';
import items from '@mocks-data/items';

const CategoryPage = () => (
  <Layout seo={{ title: 'MY JAM' }}>
    <Category category={categories[0]} itemsList={items} />
  </Layout>
);

export default CategoryPage;

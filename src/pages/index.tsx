import React from 'react';
import { GetServerSideProps } from 'next';

import Layout from '@components/layout';
import Blocks from '@components/homepage-blocks';
import HomeBanner from '@components/homepage-banner';
import CategorySlider from '@components/category-slider';
import ItemSlider from '@components/item-slider';

const IndexPage: React.FC = () => (
  <Layout seo={{ title: 'MY JAM' }}>
    <HomeBanner />
    <Blocks />
    <CategorySlider />
    <ItemSlider title="Featured Products" type="featured" />
    <ItemSlider title="Trending Products" type="trending" />
  </Layout>
);

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch('http://localhost:8888/api/test');
  const text = await response.text();
  console.log(text);
  return {
    props: { data: text },
  };
};

export default IndexPage;

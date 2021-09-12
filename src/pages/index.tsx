import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '@components/layout';
import Blocks from '@components/homepage-blocks';
import HomeBanner from '@components/homepage-banner';
import CategorySlider from '@components/category-slider';
import ItemSlider from '@components/item-slider';
import { API_URL } from '@config/env';

type Props = {
  title: string;
  description: string;
  featuredItems: Array<Item>;
  trendingItems: Array<Item>;
  categories: Array<Category>;
};

const IndexPage: React.FC<Props> = ({
  title,
  description,
  featuredItems,
  trendingItems,
  categories,
}) => (
  <Layout title={title} description={description}>
    <HomeBanner />
    <Blocks />
    <CategorySlider categories={categories} />
    <ItemSlider title="Featured Products" type="featured" items={featuredItems} />
    <ItemSlider title="Trending Products" type="trending" items={trendingItems} />
  </Layout>
);

// @ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const featuredItemsResponse = await fetch(`${API_URL}/product-list?type=trending`);
  const featuredItems = await featuredItemsResponse.json();
  const trendingItemsResponse = await fetch(`${API_URL}/product-list?type=featured`);
  const trendingItems = await trendingItemsResponse.json();
  const categoriesResponse = await fetch(`${API_URL}/category-list?type=trending`);
  const categories = await categoriesResponse.json();
  return {
    revalidate: 60,
    props: {
      title: 'MY JAM',
      description: 'We support local',
      featuredItems,
      trendingItems,
      categories,
    },
  };
};

export default IndexPage;

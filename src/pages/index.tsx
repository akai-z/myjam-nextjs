import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '@components/layout';
import Blocks from '@components/homepage-blocks';
import HomeBanner from '@components/homepage-banner';
import ItemSlider from '@components/item-slider';
import CategorySlider from '@components/category-slider';
import { API_URL } from '@config/env';

type Props = {
  title: string;
  description: string;
  weeklyDealItems: Array<Item>;
  featuredItems: Array<Item>;
  trendingItems: Array<Item>;
  categories: Array<Category>;
};

const IndexPage: React.FC<Props> = ({
  title,
  description,
  weeklyDealItems,
  featuredItems,
  trendingItems,
  categories,
}) => (
  <Layout title={title} description={description}>
    <HomeBanner />
    <CategorySlider categories={categories} />
    <ItemSlider title="Featured Products" type="featured" items={featuredItems} />
    <ItemSlider title="Trending Products" type="trending" items={trendingItems} />
    <ItemSlider title="Weekly Deals" type="weekly_deals" items={weeklyDealItems} />
    <Blocks />
  </Layout>
);

// @ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const featuredItemsResponse = await fetch(`${API_URL}/proxied-product-list?type=featured`);
  const featuredItems = await featuredItemsResponse.json();
  const trendingItemsResponse = await fetch(`${API_URL}/proxied-product-list?type=trending`);
  const trendingItems = await trendingItemsResponse.json();
  const weeklyDealItemsResponse = await fetch(`${API_URL}/proxied-product-list?type=weekly_deals`);
  const weeklyDealItems = await weeklyDealItemsResponse.json();
  const categoriesResponse = await fetch(`${API_URL}/category-list?type=featured`);
  const categories = await categoriesResponse.json();
  return {
    revalidate: 300,
    props: {
      title: 'Myjam - Cultural Grocery',
      description: 'We support local',
      weeklyDealItems,
      featuredItems,
      trendingItems,
      categories,
    },
  };
};

export default IndexPage;

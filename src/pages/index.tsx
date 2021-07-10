import React from 'react';
import { GetStaticPaths } from 'next';

import Layout from '@components/layout';
import Blocks from '@components/homepage-blocks';
import HomeBanner from '@components/homepage-banner';
import CategorySlider from '@components/category-slider';
import ItemSlider from '@components/item-slider';

interface Props {
  title: string;
  description: string;
}

const IndexPage: React.FC<Props> = ({ title, description }) => (
  <Layout seo={{ title, description }}>
    <HomeBanner />
    <Blocks />
    <CategorySlider />
    <ItemSlider title="Featured Products" type="featured" />
    <ItemSlider title="Trending Products" type="trending" />
  </Layout>
);

// @ts-ignore
export const getStaticProps: GetStaticPaths = () => {
  return {
    props: {
      title: 'MY JAM',
      description: 'We support local',
    },
  };
};

export default IndexPage;

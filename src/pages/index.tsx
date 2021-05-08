import React from 'react';

import Layout from '@components/layout';
import Blocks from '@components/homepage-blocks';
import HomeBanner from '@components/homepage-banner';
import CategorySlider from '@components/category-slider';
import ItemSlider from '@components/item-slider';

const IndexPage = () => (
  <Layout seo={{ title: 'MY JAM' }}>
    <HomeBanner />
    <Blocks />
    <CategorySlider />
    <ItemSlider title="Featured Products" type="featured" />
    <ItemSlider title="Trending Products" type="trending" />
  </Layout>
);

export default IndexPage;

import React from 'react';
// import { GetServerSideProps } from 'next';

import Layout from '@components/layout';
import Blocks from '@components/homepage-blocks';
import HomeBanner from '@components/homepage-banner';
import CategorySlider from '@components/category-slider';
import ItemSlider from '@components/item-slider';

interface Props {
    data: string;
}

const IndexPage: React.FC<Props> = ({ data }) => {
    console.log(data);
    return (
        <Layout seo={{ title: 'MY JAM' }}>
            <HomeBanner />
            <Blocks />
            <CategorySlider />
            <ItemSlider title="Featured Products" type="featured" />
            <ItemSlider title="Trending Products" type="trending" />
        </Layout>
    );
}

// // @ts-ignore
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const response = await fetch('https://practical-dubinsky-3c3f1a.netlify.app/api/test');
//   const text = await response.text();
//   return {
//     props: { data: text },
//   };
// };

export default IndexPage;

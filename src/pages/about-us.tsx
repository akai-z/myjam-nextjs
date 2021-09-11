import React from 'react';
import { GetStaticProps } from 'next';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import Layout from '@components/layout';
import { NOTION_ABOUT_US } from '@config/env';

interface Props {
  title: string;
  description: string;
  recordMap: any;
}

const AboutUsPage: React.FC<Props> = ({ title, description, recordMap }) => (
  <Layout title={title} description={description}>
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  </Layout>
);

// @ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(NOTION_ABOUT_US);
  return {
    props: {
      title: 'About Us',
      description: 'We support local',
      recordMap,
    },
  };
};

export default AboutUsPage;

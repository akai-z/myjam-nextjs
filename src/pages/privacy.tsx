import React from 'react';
import { GetStaticProps } from 'next';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import Layout from '@components/layout';
import { NOTION_PRIVACY } from '@config/env';

type Props = {
  title: string;
  description: string;
  recordMap: any;
};

const PrivacyPolicyPage: React.FC<Props> = ({ title, description, recordMap }) => (
  <Layout title={title} description={description}>
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  </Layout>
);

// @ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(NOTION_PRIVACY);
  return {
    revalidate: 300,
    props: {
      title: 'Privacy Policy',
      description: 'We support local',
      recordMap,
    },
  };
};

export default PrivacyPolicyPage;

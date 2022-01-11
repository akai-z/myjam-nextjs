import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import Layout from '@components/layout';
import { NOTION_SUCCESS } from '@config/env';
import { useShoppingCart } from '@contexts/shopping-cart';
import * as gtag from 'lib/gtag';
import { clearCart } from '@contexts/shopping-cart/actions';

type Props = {
  title: string;
  description: string;
  recordMap: any;
};

const SuccessPage: React.FC<Props> = ({ title, description, recordMap }) => {
  const { dispatch, amount, items } = useShoppingCart();
  const { query } = useRouter();

  useEffect(() => {
    if (query.session_id) {
      gtag.purchaseEvent({
        items,
        amount,
        currency: 'GBP',
        shipping: 5,
        transaction_id: query.session_id as string,
      });
    }
    dispatch(clearCart());
  }, []);

  return (
    <Layout title={title} description={description}>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </Layout>
  );
};

// @ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(NOTION_SUCCESS);
  return {
    revalidate: 300,
    props: {
      title: 'MY JAM',
      description: 'We support local',
      recordMap,
    },
  };
};

export default SuccessPage;

import React from 'react';
import { NextSeo, ProductJsonLd } from 'next-seo';

type Props = {
  title: string;
  description?: string;
  productJsonLd?: {
    productName: string;
    images: Array<string>;
    description?: string;
  };
};

const SEO: React.FC<Props> = ({ title, description, productJsonLd }) => {
  return (
    <React.Fragment>
      <NextSeo noindex={true} nofollow={true} title={title} description={description} />
      {productJsonLd && <ProductJsonLd {...productJsonLd} />}
    </React.Fragment>
  );
};

export default SEO;

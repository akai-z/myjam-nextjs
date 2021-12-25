import React from 'react';
import { GetServerSideProps } from 'next';
import { API_URL, APP_URL } from '@config/env';

const Sitemap = () => <React.Fragment />;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let products = [];
  let pageNumber = 1;
  const pageSize = 100;
  const response = await fetch(
    `${API_URL}/proxied-product-list?page-size=${pageSize}&page-number=${pageNumber}`,
  );
  const records = await response.json();

  const countResponse = await fetch(`${API_URL}/proxied-product-list?size`);
  const { count = 0 } = await countResponse.json();

  products = products.concat(...records);

  while (Number(count) > pageNumber * pageSize) {
    const res = await fetch(
      `${API_URL}/proxied-product-list?page-size=${pageSize}&page-number=${pageNumber}`,
    );
    const tmpRecords = await res.json();
    products = products.concat(...tmpRecords);
    pageNumber++;
  }

  const resCategories = await fetch(`${API_URL}/category-list`);
  const categories = await resCategories.json();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${categories
        .filter((category: Category) => !category.fields.main_category)
        .map((category: Category) => {
          return `
            <url>
              <loc>${APP_URL}/category/${category.fields.slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
        })
        .join('')}
      ${products
        .map((product: Item) => {
          return `
            <url>
              <loc>${APP_URL}/procduct/${product.slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    revalidate: 3600,
    props: {},
  };
};

export default Sitemap;

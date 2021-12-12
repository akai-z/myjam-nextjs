import React from 'react';
import { GetServerSideProps } from 'next';
import { API_URL, APP_URL } from '@config/env';

const Sitemap = () => <React.Fragment />;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const resProducts = await fetch(`${API_URL}/proxied-product-list`);
  const products = await resProducts.json();

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
    props: {},
  };
};

export default Sitemap;

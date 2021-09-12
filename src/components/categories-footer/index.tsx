import React from 'react';
import Link from 'next/link';
import { Wrapper, FooterWrapper, LinksWrapper, RouterLink, Title } from './styles';
import { fetchCategories } from '@lib/queries/categories';

const CategoriesFooter: React.FC = () => {
  const { categories } = fetchCategories();
  return (
    <FooterWrapper>
      <Wrapper>
        <LinksWrapper>
          <Title>Egyptian cuisine</Title>
          {categories
            .filter((category) => category.fields.egyptian_cuisine)
            .map((category) => (
              <Link href={`/${category.fields.slug}`} passHref>
                <RouterLink>{category.fields.name}</RouterLink>
              </Link>
            ))}
        </LinksWrapper>
        <LinksWrapper>
          <Title>Indian cuisine</Title>
          {categories
            .filter((category) => category.fields.indian_cuisine)
            .map((category) => (
              <Link href={`/${category.fields.slug}`} passHref>
                <RouterLink>{category.fields.name}</RouterLink>
              </Link>
            ))}
        </LinksWrapper>
        <LinksWrapper>
          <Title>Halal</Title>
          {categories
            .filter((category) => category.fields.halal)
            .map((category) => (
              <Link href={`/${category.fields.slug}`} passHref>
                <RouterLink>{category.fields.name}</RouterLink>
              </Link>
            ))}
        </LinksWrapper>
        <LinksWrapper>
          <Title>This week</Title>
          {categories
            .filter((category) => category.fields.this_week)
            .map((category) => (
              <Link href={`/${category.fields.slug}`} passHref>
                <RouterLink>{category.fields.name}</RouterLink>
              </Link>
            ))}
        </LinksWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default CategoriesFooter;

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
          <Title>World cuisine</Title>
          {categories
            .filter((category) => category.fields.world_cuisine)
            .map((category) => (
              <Link key={category.id} href={`/category/${category.fields.slug}`} passHref>
                <RouterLink>{category.fields.name}</RouterLink>
              </Link>
            ))}
        </LinksWrapper>
        <LinksWrapper>
          <Title>Team picks</Title>
          {categories
            .filter((category) => category.fields.team_picks)
            .map((category) => (
              <Link key={category.id} href={`/category/${category.fields.slug}`} passHref>
                <RouterLink>{category.fields.name}</RouterLink>
              </Link>
            ))}
        </LinksWrapper>
        <LinksWrapper>
          <Title>World snacks</Title>
          {categories
            .filter((category) => category.fields.world_snacks)
            .map((category) => (
              <Link key={category.id} href={`/category/${category.fields.slug}`} passHref>
                <RouterLink>{category.fields.name}</RouterLink>
              </Link>
            ))}
        </LinksWrapper>
        <LinksWrapper>
          <Title>Chef touch</Title>
          {categories
            .filter((category) => category.fields.chef_touch)
            .map((category) => (
              <Link key={category.id} href={`/category/${category.fields.slug}`} passHref>
                <RouterLink>{category.fields.name}</RouterLink>
              </Link>
            ))}
        </LinksWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default CategoriesFooter;

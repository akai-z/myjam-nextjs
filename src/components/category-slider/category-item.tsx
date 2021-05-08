import React from 'react';
import Link from 'next/link';
import { ItemWrapper, Title, Image, RouterLink } from './styles';

interface Props {
  slug: string;
  image: string;
  name: string;
}

const CategoryItem: React.FC<Props> = ({ slug, image, name }) => {
  return (
    <ItemWrapper>
      <Link href={`/category/${slug}`} passHref>
        <RouterLink>
          <Image src={image} loading="lazy" />
          <Title>{name}</Title>
        </RouterLink>
      </Link>
    </ItemWrapper>
  );
};

export default CategoryItem;

import React from 'react';
import { priceFormatter } from '@utils/helper';
import Link from 'next/link';
import { ItemWrapper, Title, Image, RouterLink, Price, CartIcon, ActionWrapper } from './styles';

interface Props {
  slug: string;
  image: string;
  name: string;
  price: number;
  id: string;
}

const Item: React.FC<Props> = ({ slug, image, name, price }) => {
  return (
    <ItemWrapper>
      <ActionWrapper>
        <CartIcon />
      </ActionWrapper>
      <Link href={`/product/${slug}`} passHref>
        <RouterLink>
          <Image src={image} loading="lazy" />
          <div>
            <Price>{priceFormatter(price)}</Price>
            <Title>{name}</Title>
          </div>
        </RouterLink>
      </Link>
    </ItemWrapper>
  );
};

export default Item;

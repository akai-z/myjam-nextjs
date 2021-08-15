import React from 'react';
import { priceFormatter } from '@utils/helper';
import Link from 'next/link';
import {
  ItemWrapper,
  Title,
  Image,
  RouterLink,
  Price,
  OldPrice,
  OfferIcon,
  ActionWrapper,
} from './styles';

interface Props {
  slug: string;
  image: string;
  name: string;
  price: number;
  specialPrice: number;
  id: string;
}

const Item: React.FC<Props> = ({ slug, image, name, price, specialPrice }) => (
  <ItemWrapper>
    {specialPrice > 0 && (
      <ActionWrapper>
        <OfferIcon />
      </ActionWrapper>
    )}
    <Link href={`/product/${slug}`} passHref>
      <RouterLink>
        <Image src={image} loading="lazy" />
        <div>
          <Title>{name}</Title>
          {specialPrice > 0 ? (
            <div>
              <Price>{priceFormatter(price)}</Price>
              <OldPrice>{priceFormatter(price)}</OldPrice>
            </div>
          ) : (
            <Price>{priceFormatter(price)}</Price>
          )}
        </div>
      </RouterLink>
    </Link>
  </ItemWrapper>
);

export default Item;

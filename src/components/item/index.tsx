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

type Props = {
  slug: string;
  image: string;
  name: string;
  price: number;
  specialPrice: number;
  id: string;
};

const Item: React.FC<Props> = ({ slug, image, name, price, specialPrice }) => (
  <ItemWrapper>
    {specialPrice > 0 && (
      <ActionWrapper>
        <OfferIcon />
      </ActionWrapper>
    )}
    <Link href={`/product/${slug}`} passHref>
      <RouterLink>
        <Image src={image} loading="lazy" alt={name} />
        <div>
          <Title>{name}</Title>
          {specialPrice > 0 ? (
            <div>
              <Price>{priceFormatter(specialPrice)}</Price>
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

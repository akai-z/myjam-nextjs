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
          {specialPrice > 0 ? (
            <React.Fragment>
              <OldPrice>{priceFormatter(price)}</OldPrice>
              <Price>{priceFormatter(price)}</Price>
            </React.Fragment>
          ) : (
            <Price>{priceFormatter(price)}</Price>
          )}
          <Title>{name}</Title>
        </div>
      </RouterLink>
    </Link>
  </ItemWrapper>
);

export default Item;

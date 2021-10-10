import React from 'react';
import _toNumber from 'lodash/toNumber';
import MultiSlider from '@components/multi-slider';
import Item from '@components/item';
import Link from 'next/link';
import { Wrapper, SliderTitle, RouterLink } from './styles';

type Props = {
  title: string;
  type: string;
  items: Array<Item>;
};

const ItemSlider: React.FC<Props> = ({ title, items }) => {
  // const { items } = fetchItemsBasedType(type);

  const responsive = {
    largeMonitor: {
      breakpoint: { max: 4000, min: 1450 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1450, min: 1200 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1200, min: 760 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 2,
    },
  };

  return (
    <Wrapper>
      <SliderTitle>
        {title}{' '}
        <Link href="/" passHref>
          <RouterLink>See More</RouterLink>
        </Link>
      </SliderTitle>
      <MultiSlider responsive={responsive}>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            specialPrice={_toNumber(item.special_price || 0)}
            name={item.name}
            slug={item.slug}
            price={_toNumber(item.price)}
            image={item.thumbnail_image}
          />
        ))}
      </MultiSlider>
    </Wrapper>
  );
};

export default ItemSlider;

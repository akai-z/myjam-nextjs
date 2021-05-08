import React from 'react';
import MultiSlider from '@components/multi-slider';
import Item from '@components/item';
import mockedItems from '@mocks-data/items';
import Link from 'next/link';
import { Wrapper, SliderTitle, RouterLink } from './styles';

interface Props {
  title: string;
  type: string;
}

const ItemSlider: React.FC<Props> = ({ title, type }) => {
  const items = [...mockedItems, ...mockedItems, ...mockedItems, ...mockedItems];
  console.log(title, type);
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
        {items.map(({ id, fields }) => (
          <Item
            key={id}
            id={id}
            name={fields.name}
            slug={fields.slug}
            price={fields.price}
            image={fields.thumbnail_image}
          />
        ))}
      </MultiSlider>
    </Wrapper>
  );
};

export default ItemSlider;

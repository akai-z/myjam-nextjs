import React from 'react';
import _toNumber from 'lodash/toNumber';
import { SwiperSlide } from 'swiper/react';
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
  const breakpoints = {
    1450: {
      spaceBetween: 10,
      slidesPerView: 7,
    },
    1200: {
      spaceBetween: 10,
      slidesPerView: 6,
    },
    760: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    100: {
      spaceBetween: 10,
      slidesPerView: 2,
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
      <MultiSlider breakpoints={breakpoints}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{ padding: '0 5px' }}>
              <Item
                id={item.id}
                specialPrice={_toNumber(item.special_price || 0)}
                name={item.name}
                slug={item.slug}
                price={_toNumber(item.price)}
                image={item.thumbnail_image}
              />
            </div>
          </SwiperSlide>
        ))}
      </MultiSlider>
    </Wrapper>
  );
};

export default ItemSlider;

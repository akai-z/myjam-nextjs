import React from 'react';
import MultiSlider from '@components/multi-slider';
import { SwiperSlide } from 'swiper/react';
import { Wrapper, SliderTitle } from './styles';
import CategoryItem from './category-item';

type Props = {
  categories: Array<Category>;
};

const CategorySlider: React.FC<Props> = ({ categories }) => {
  const breakpoints = {
    1450: {
      spaceBetween: 0,
      slidesPerView: 6,
    },
    1200: {
      spaceBetween: 0,
      slidesPerView: 5,
    },
    760: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    100: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
  };

  return (
    <Wrapper>
      <SliderTitle>Shop By Category</SliderTitle>
      <MultiSlider breakpoints={breakpoints}>
        {categories
          .filter(({ fields }) => fields.featured)
          .map(({ fields }) => (
            <SwiperSlide key={fields.id}>
              <CategoryItem slug={fields.slug} image={fields.image} name={fields.name} />
            </SwiperSlide>
          ))}
      </MultiSlider>
    </Wrapper>
  );
};

export default CategorySlider;

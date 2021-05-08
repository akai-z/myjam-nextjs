import React from 'react';
import MultiSlider from '@components/multi-slider';
import mockedCategories from '@mocks-data/categories';
import { Wrapper, SliderTitle } from './styles';
import CategoryItem from './category-item';

const CategorySlider: React.FC = () => {
  const categories = [...mockedCategories, ...mockedCategories, ...mockedCategories];

  const responsive = {
    largeMonitor: {
      breakpoint: { max: 4000, min: 1450 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1450, min: 1200 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 760 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 2,
    },
  };

  return (
    <Wrapper>
      <SliderTitle>Shop By Category</SliderTitle>
      <MultiSlider responsive={responsive}>
        {categories.map(({ fields }) => (
          <CategoryItem
            key={fields.id}
            slug={fields.slug}
            image={fields.image}
            name={fields.name}
          />
        ))}
      </MultiSlider>
    </Wrapper>
  );
};

export default CategorySlider;

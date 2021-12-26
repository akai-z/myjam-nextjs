import React from 'react';
import MultiSlider from '@components/multi-slider';
import { Wrapper } from './styles';

type Props = {
  images: Array<string>;
};

const ImageSlider: React.FC<Props> = ({ images }) => {
  const breakpoints = {
    1450: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    1200: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    760: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    10: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
  };

  return (
    <Wrapper>
      <MultiSlider breakpoints={breakpoints} showArrows={false}>
        {images.map((img, index) => (
          <img src={img} key={index} alt="Product Image" />
        ))}
      </MultiSlider>
    </Wrapper>
  );
};

export default ImageSlider;

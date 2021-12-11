import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import { Wrapper } from './styles';

type Props = {
  showDots?: boolean;
  showArrows?: boolean;
  spaceBetween?: number;
  breakpoints: {
    [key: number]: {
      spaceBetween: number;
      slidesPerView: number;
    };
  };
};

SwiperCore.use([Navigation]);

const MultiSlider: React.FC<Props> = ({
  breakpoints,
  children,
  spaceBetween = 0,
  showArrows = true,
}) => {
  return (
    <Wrapper>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={spaceBetween}
        slidesPerView={6}
        loop={true}
        navigation={showArrows}
        hashNavigation={showArrows}
      >
        {children}
      </Swiper>
    </Wrapper>
  );
};

export default MultiSlider;

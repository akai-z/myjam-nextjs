import React from 'react';
import MultiSlider from '@components/multi-slider';
import { Wrapper } from './styles';
import { useViewportContext } from '@contexts/viewport';
import { isMobile } from '@utils/helper';

interface Props {
  images: Array<string>;
}

const ImageSlider: React.FC<Props> = ({ images }) => {
  const { width } = useViewportContext();
  const responsive = {
    largeMonitor: {
      breakpoint: { max: 4000, min: 1450 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1450, min: 1200 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 760 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <MultiSlider responsive={responsive} showDots={isMobile(width)} showArrows={!isMobile(width)}>
        {images.map((img, index) => (
          <img src={img} key={index} alt="Product Image" />
        ))}
      </MultiSlider>
    </Wrapper>
  );
};

export default ImageSlider;

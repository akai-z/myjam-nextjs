import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Wrapper, Button, LeftArrow, RightArrow } from './styles';

interface Props {
  showDots?: boolean;
  showArrows?: boolean;
  responsive: {
    [key: string]: {
      breakpoint: { min: number; max: number };
      items: number;
    };
  };
}

const MultiSlider: React.FC<Props> = ({
  responsive,
  children,
  showDots = false,
  showArrows = true,
}) => {
  const CustomRightArrow: React.FC<any> = ({ onClick }) => (
    <Button position="right" onClick={() => onClick()}>
      <RightArrow />
    </Button>
  );

  const CustomLeftArrow: React.FC<any> = ({ onClick }) => (
    <Button position="left" onClick={() => onClick()}>
      <LeftArrow />
    </Button>
  );

  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        showDots={showDots}
        arrows={showArrows}
        ssr={true}
        infinite={true}
        autoPlay={false}
        swipeable={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {children}
      </Carousel>
    </Wrapper>
  );
};

export default MultiSlider;

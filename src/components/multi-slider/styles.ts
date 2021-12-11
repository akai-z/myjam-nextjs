import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  & .swiper-button-prev,
  & .swiper-button-next {
    width: 40px !important;
    height: 40px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    ${tw`bg-white active:bg-gray-200 transition shadow-md rounded-full flex items-center justify-center focus:outline-none`}
    @media screen and (max-width: 768px) {
      width: 30px !important;
      height: 30px !important;
    }
  }
  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    font-size: 15px !important;
    font-weight: 700 !important;
    @media screen and (max-width: 768px) {
      font-size: 12px !important;
    }
    color: #333;
  }
  & .swiper-button-prev {
    left: 0 !important;
  }
  & .swiper-button-next {
    right: 0 !important;
  }
`;

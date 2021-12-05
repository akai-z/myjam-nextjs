import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  & .swiper-container {
    width: 100%;
  }
  & .swiper-container img {
    ${tw`rounded-lg`}
  }
  & > div {
    margin: 0 !important;
  }
  & button {
    z-index: 9 !important;
  }
`;

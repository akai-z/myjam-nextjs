import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  & .react-multi-carousel-item {
    width: 100%;
  }
  & .react-multi-carousel-item img {
    ${tw`rounded-lg`}
  }
  & > div {
    margin: 0 !important;
  }
`;

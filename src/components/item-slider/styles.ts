import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${tw`py-4 lg:py-16`}
  & .react-multi-carousel-item {
    ${tw`p-3`}
  }
`;

export const SliderTitle = tw.h2`pl-2 text-left text-black mb-2 md:mb-4 text-lg md:text-xl`;

export const RouterLink = tw.a`underline text-gray-400 hover:text-black text-sm pl-2`;

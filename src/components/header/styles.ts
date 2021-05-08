import tw from 'twin.macro';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.header<{ scroll: boolean }>`
  ${tw`border-b border-gray-100 bg-white py-2 sticky top-0 z-20`}
  ${({ scroll }) => scroll && tw`shadow-md`}
`;

export const Wrapper = tw.div`container mx-auto px-4`;

export const Grid = styled.div`
  ${tw`grid gap-0 md:gap-8 items-center`};
  grid-template-columns: 1fr 3fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

export const RouterLink = tw.a`cursor-pointer`;

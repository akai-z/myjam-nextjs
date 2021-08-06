import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: calc(100vh - 328px);
`;

export const Title = tw.h1`text-xl md:text-2xl mb-4 lg:text-3xl md:mt-6 md:mb-8 text-gray-600`;

export const LoadMore = styled.button`
  ${tw`relative mt-8 w-40 px-4 py-2 bg-gray-800 text-gray-200 text-base shadow-md rounded-md outline-none focus:outline-none`}
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
`;

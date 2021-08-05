import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-auto`}
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 328px);
    max-width: 1200px;
    ${tw`mt-4`}
  }
`;

export const Title = tw.h1`text-xl md:text-2xl lg:text-3xl text-gray-600 capitalize`;

export const FlexWrapper = tw.div`flex justify-between items-center py-6`;

export const GridWrapper = styled.div`
  ${tw`grid auto-rows-auto py-6 gap-6`}
  & > * {
    ${tw`w-full md:w-1/2`}
  }

  & > div:last-child {
    ${tw`mt-4`}
  }
`;

export const Price = tw.h3`text-xl md:text-xl text-black`;

export const OldPrice = tw.span`text-gray-300 line-through text-base md:text-base pr-4`;

export const AddItemButton = tw.button`
  w-40 md:w-48 text-sm text-white md:text-base bg-black hover:bg-gray-800 
  rounded-md px-8 py-3 md:px-10 md:py-3 focus:outline-none transition
`;

export const Text = tw.p`py-4 border-t-2 border-gray-200 text-gray-700 select-none`;

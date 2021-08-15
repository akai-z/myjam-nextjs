import tw from 'twin.macro';
import styled from '@emotion/styled';
import { TagIcon } from '@heroicons/react/solid';

export const Wrapper = tw.div`py-16`;

export const OfferIcon = tw(TagIcon)`text-black h-4 w-4`;

export const ActionWrapper = tw.div`
  bg-gray-200 p-2 absolute top-3 right-3 rounded-full
`;

export const ItemWrapper = styled.div`
  ${tw`bg-white p-2 rounded-md shadow-sm relative h-full`}
  & a {
    ${tw`h-full`}
    & > div {
      ${tw`p-2 h-full flex flex-col-reverse`}
    }
  }
`;

export const RouterLink = tw.a`flex flex-col`;

export const Image = tw.img`w-full`;

export const Price = tw.span`text-black text-sm md:text-base`;

export const OldPrice = tw.span`text-gray-400 line-through text-xs md:text-sm pl-2`;

export const Title = tw.h3`text-gray-500 text-sm md:text-base pt-1 truncate`;

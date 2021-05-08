import tw from 'twin.macro';
import styled from '@emotion/styled';
import { ShoppingCartIcon } from '@heroicons/react/solid';

export const Wrapper = tw.div`py-16`;

export const CartIcon = tw(ShoppingCartIcon)`text-black h-4 w-4`;

export const ActionWrapper = tw.div`
  bg-gray-200 p-3 absolute top-3 right-3 rounded-full cursor-pointer
  hover:bg-gray-300 transition
`;

export const ItemWrapper = styled.div`
  ${tw`bg-white p-2 rounded-md shadow-sm relative`}
  & div {
    ${tw`p-2`}
  }
`;

export const RouterLink = tw.a`flex flex-col`;

export const Image = tw.img`w-full`;

export const Price = tw.span`text-black text-sm md:text-base`;

export const Title = tw.h3`text-gray-500 text-sm md:text-base pt-1 truncate`;

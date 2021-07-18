import tw from 'twin.macro';
import styled from '@emotion/styled';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export const Wrapper = tw.div`hidden md:flex items-center justify-end relative`;

export const Qty = styled.span`
  ${tw`bg-red-400 rounded-full h-4 w-4 text-white absolute text-center`}
  top: -3px;
  right: 9px;
  font-size: 12px;
`;

export const CartIcon = tw(ShoppingCartIcon)`h-9 w-9 cursor-pointer text-gray-600`;

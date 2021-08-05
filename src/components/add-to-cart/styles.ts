import tw from 'twin.macro';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
import styled from '@emotion/styled';

export const AddItemButton = tw.button`
  w-40 md:w-48 text-sm text-white md:text-base bg-black hover:bg-opacity-75
  rounded-md px-8 py-3 md:px-10 md:py-3 focus:outline-none transition-opacity duration-300
`;

export const QtyBox = styled.div<{ size: string }>`
  ${tw`flex w-40 md:w-48 text-sm text-white md:text-base bg-black rounded-md focus:outline-none h-12 items-center`};
  ${({ size }) => size === 'small' && tw`w-32 md:w-40 h-10`};
`;

export const ActionWrapper = tw.div`
  px-4 cursor-pointer
`;

export const PlusButton = tw(PlusIcon)`
  h-6 w-6
`;

export const MinusButton = tw(MinusIcon)`
  h-6 w-6
`;

export const Qty = tw.span`
  flex-grow text-center
`;

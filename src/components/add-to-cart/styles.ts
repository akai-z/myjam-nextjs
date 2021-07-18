import tw from 'twin.macro';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

export const AddItemButton = tw.button`
  w-40 md:w-48 text-sm text-white md:text-base bg-black hover:bg-opacity-75
  rounded-md px-8 py-3 md:px-10 md:py-3 focus:outline-none transition-opacity duration-300
`;

export const QtyBox = tw.div`
  flex w-40 md:w-48 text-sm text-white md:text-base 
  bg-black rounded-md focus:outline-none h-12 items-center
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

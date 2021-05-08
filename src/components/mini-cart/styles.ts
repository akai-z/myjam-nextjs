import tw from 'twin.macro';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export const Wrapper = tw.div`hidden md:flex items-center justify-end`;

export const CartIcon = tw(ShoppingCartIcon)`h-7 w-7 cursor-pointer text-gray-600`;

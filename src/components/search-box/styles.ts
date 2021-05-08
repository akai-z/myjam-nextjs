import tw from 'twin.macro';
import { SearchIcon as SearchIconHero, XIcon } from '@heroicons/react/outline';

export const Wrapper = tw.div`flex items-center relative`;

export const Input = tw.input`
  w-full bg-gray-100 focus:bg-gray-200 text-gray-700 outline-none focus:outline-none
  px-12 py-3 transition ease-in duration-200 rounded-md
`;

export const SearchIcon = tw(SearchIconHero)`absolute left-4 h-5 w-5 text-gray-400`;

export const CloseIcon = tw(XIcon)`absolute right-4 h-5 w-5 text-gray-400 cursor-pointer`;

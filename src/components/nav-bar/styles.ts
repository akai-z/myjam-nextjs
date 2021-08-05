import tw from 'twin.macro';
import { ChevronDownIcon, XIcon } from '@heroicons/react/outline';
import styled from '@emotion/styled';

export const NavWrapper = styled.nav<{ isOpen: boolean }>`
  ${tw`
    fixed transition bg-white
    transform -translate-x-full w-full top-0 h-screen z-30
    md:translate-x-0 md:z-10 md:h-auto md:relative md:border-b md:border-gray-100
  `}
  ${({ isOpen }) => isOpen && tw`translate-x-0`}
`;

export const Wrapper = tw.div`container md:mx-auto md:px-4`;

export const TitleBlock = tw.div`shadow-sm p-6 flex flex-row items-center justify-between bg-gray-100 md:hidden`;

export const Title = tw.h2`text-xl text-black font-semibold`;

export const CloseIcon = tw(XIcon)`text-xl text-black font-semibold h-5 w-5`;

export const Grid = styled.ul`
  ${tw`flex flex-col p-8 space-y-5 md:grid md:grid-flow-col md:gap-10 md:auto-cols-max md:p-0 md:space-y-0`};
  @media screen and (max-width: 768px) {
    height: calc(100vh - 76px);
    overflow-y: scroll;
  }
`;

export const Item = styled.li`
  ${tw`md:flex md:justify-between md:flex-row md:items-center md:py-4 cursor-pointer relative select-none`}
  @media screen and (max-width: 768px) {
    &.active {
      & > span,
      & > svg {
        color: #000;
      }
    }
    &.active div {
      visibility: visible !important;
      display: block !important;
      opacity: 1 !important;
      z-index: 1 !important;
    }
  }
  @media screen and (min-width: 768px) {
    &:hover > span,
    &:hover > svg {
      color: #000;
    }
    &:hover div {
      visibility: visible !important;
      opacity: 1 !important;
      z-index: 30 !important;
    }
  }
`;

export const Span = tw.span`text-gray-500 text-base`;

export const DownArrow = tw(ChevronDownIcon)`
  absolute right-0 h-4 w-4 text-gray-500 ml-2 top-1
  md:static
`;

export const SubCategoriesList = tw.div`
  hidden bg-white top-full m-0 mt-4 pl-2 invisible border-l-4 border-gray-300 opacity-0 z-0 transition-opacity ease duration-300 
  md:w-64 md:block md:rounded-b-lg md:shadow md:border-t-2 md:border-black md:absolute md:mt-0 md:py-2 md:pl-0 md:border-l-0
`;

export const RouterLink = tw.a`
  block text-gray-500 hover:text-black py-3 md:py-2 px-4 hover:underline text-sm  md:text-base
`;

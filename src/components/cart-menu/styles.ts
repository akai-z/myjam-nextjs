import tw from 'twin.macro';
import styled from '@emotion/styled';
import { XIcon } from '@heroicons/react/outline';

export const CartWrapper = styled.div<{ isOpen: boolean }>`
  ${tw`
    fixed transition bg-white
    transform -translate-x-full w-full top-0 h-screen z-30
    md:hidden md:translate-x-0 md:z-10 md:h-auto md:relative md:border-b md:border-gray-100
  `}
  ${({ isOpen }) => isOpen && tw`translate-x-0`}
`;

export const Wrapper = tw.div`container md:mx-auto md:px-4`;

export const TitleBlock = tw.div`shadow-sm p-6 py-4 flex flex-row items-center justify-between md:hidden`;

export const Title = tw.h2`text-xl text-black font-semibold`;

export const CloseIcon = tw(XIcon)`text-xl text-black font-semibold h-5 w-5`;

export const Block = styled.div``;

export const ItemsWrapper = styled(Block)`
  height: 58vh;
  overflow-y: scroll;
  & > div:last-child {
    margin-bottom: 80px;
  }
`;

export const AmountBlock = styled.div`
  ${tw`flex justify-between items-center p-4 bg-gray-100 shadow-md border-t`};
  & h3 {
    ${tw`text-gray-600`};
  }
  & h3:last-child {
    ${tw`font-semibold`};
  }
`;

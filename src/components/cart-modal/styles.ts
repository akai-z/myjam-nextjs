import tw from 'twin.macro';
import styled from '@emotion/styled';
import { XIcon } from '@heroicons/react/outline';

export const Wrapper = styled.div`
  ${tw`container mx-auto`};
  max-width: 100% !important;
`;

export const Block = styled.div`
  ${tw`container mx-auto`};
  width: 750px !important;
`;

export const ItemsWrapper = styled(Block)`
  height: 60vh;
  overflow-y: scroll;
  & > div:last-child {
    margin-bottom: 80px;
  }
`;

export const ColoredBlock = tw.div`w-full bg-gray-100`;

export const HeadBlock = tw.div`flex justify-between items-center py-8`;

export const AmountBlock = styled.div`
  ${tw`flex justify-between items-center py-4`};
  & h3 {
    ${tw`text-gray-600`};
  }
  & h3:last-child {
    ${tw`font-semibold`};
  }
`;

export const Title = tw.h2`text-black text-2xl font-semibold tracking-wide`;

export const Qty = styled.span`
  ${tw`bg-red-400 rounded-full h-4 w-4 text-white absolute text-center`}
  top: -3px;
  right: 9px;
  font-size: 12px;
`;

export const CloseIcon = tw(XIcon)`h-5 w-5 cursor-pointer text-black`;

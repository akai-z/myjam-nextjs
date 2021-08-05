import tw from 'twin.macro';
import styled from '@emotion/styled';
import { XCircleIcon } from '@heroicons/react/solid';

export const DeleteItem = styled.div`
  ${tw`absolute bg-black bg-opacity-40 transition duration-500 ease-in-out cursor-pointer`};
  width: 120px;
  height: 120px;
  border-radius: 5px;
  visibility: hidden;
`;

export const Wrapper = styled.div`
  ${tw`flex items-stretch py-8 border-b border-gray-200 relative`};
  &:hover ${DeleteItem} {
    visibility: visible !important;
  }
`;

export const XIcon = styled(XCircleIcon)`
  ${tw`w-8 h-8 text-white absolute cursor-pointer`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DetailsWrapper = tw.div`flex justify-between flex-grow pl-4`;

export const TextBlock = tw.div`relative flex-grow`;

export const Name = tw.span`block mb-2 text-gray-500`;

export const Price = tw.span`block text-gray-400 text-sm`;

export const ActionsBlock = tw.div`flex flex-col justify-between`;

export const TotalPrice = tw.span`block text-black font-medium text-right`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
`;

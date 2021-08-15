import tw from 'twin.macro';
import styled from '@emotion/styled';
import { XCircleIcon } from '@heroicons/react/solid';

export const DeleteItem = styled.div`
  ${tw`hidden md:block absolute bg-black bg-opacity-40 transition duration-500 ease-in-out cursor-pointer`};
  width: 120px;
  height: 120px;
  border-radius: 5px;
  visibility: hidden;
`;

export const Wrapper = styled.div`
  ${tw`flex items-stretch px-4 py-6 md:px-0 md:py-8 border-b border-gray-200 relative`};
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

export const DetailsWrapper = tw.div`flex flex-col md:flex-row justify-between flex-grow pl-4`;

export const TextBlock = tw.div`relative flex-grow`;

export const Name = tw.span`text-sm md:text-base block mb-2 text-gray-500`;

export const Price = tw.span`text-sm md:text-base block text-gray-400 text-sm`;

export const ActionsBlock = tw.div`flex flex-row-reverse md:flex-col justify-between items-center md:items-end mt-4 md:m-0`;

export const TotalPrice = tw.span`block text-black font-medium text-right`;

export const CheckBoxWrapper = tw.div`md:absolute mt-4 md:bottom-0 md:mt-6`;

export const Img = styled.img`
  ${tw`shadow-sm`}
  width: 120px;
  height: 120px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = tw.div`flex items-stretch py-8 border-b border-gray-200`;

export const DetailsWrapper = tw.div`flex justify-between flex-grow pl-4`;

export const TextBlock = tw.div``;

export const Name = tw.span`block mb-2 text-gray-500`;

export const Price = tw.span`block text-gray-400 text-sm`;

export const ActionsBlock = tw.div`flex flex-col justify-between`;

export const TotalPrice = tw.span`block text-black font-medium text-right`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
`;

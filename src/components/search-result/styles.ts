import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  top: 87px;
  height: calc(100vh - 87px);
  min-height: calc(100vh - 88px);
  background-color: #f7f7f7;
  overflow-y: scroll;
  ${tw`fixed w-screen py-4 md:py-10 m-auto left-0 z-50 border-t border-gray-200`}
`;

export const Block = tw.div`mt-4 md:pt-20 text-center`;

export const Text = tw.p`mt-4 text-base md:text-lg font-semibold`;

export const SubText = tw.p`mt-2 text-sm md:text-base text-gray-500`;

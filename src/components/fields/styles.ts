import tw from 'twin.macro';
import styled from '@emotion/styled';
import image from '@images/down-arrow.png';
import { CheckIcon as MarkIcon } from '@heroicons/react/solid';

export const Wrapper = tw.div`block relative`;

export const CheckBoxWrapper = tw.div`flex items-center cursor-pointer`;

export const CheckBlock = styled.div<{ checked: boolean }>`
  ${tw`rounded-md border-2 border-gray-200 h-5 w-5 mr-2 relative`}
  ${({ checked }) => checked && tw`border-gray-800`}
`;

export const CheckIcon = styled(MarkIcon)`
  ${tw`h-4 w-5 absolute text-gray-800`}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input<{ hasError?: boolean; hidden?: boolean }>`
  ${tw`mt-1 block px-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none
  focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition`}
  ${({ hasError }) => hasError && tw`border-red-500`}
  ${({ hidden }) => hidden && tw`opacity-0 absolute cursor-pointer`}
`;

export const TextArea = tw.textarea`
  mt-1 block px-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none
  focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition
`;

export const Select = styled.select<{ hasError: boolean }>`
  ${tw`mt-1 block px-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none
  focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition`}
  ${({ hasError }) => hasError && tw`border-red-500`}
  height: 42px;
  background-image: url(${image});
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2rem;
  appearance: none;
`;

export const ErrorMessage = tw.p`text-red-500 pt-1`;

export const Label = tw.label`text-gray-600 text-sm md:text-base`;

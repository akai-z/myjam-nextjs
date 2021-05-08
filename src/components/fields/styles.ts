import tw from 'twin.macro';
import styled from '@emotion/styled';
import image from '@images/down-arrow.png';

export const Wrapper = tw.label`block`;

export const Input = tw.input`
  mt-1 block px-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none
  focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition
`;

export const TextArea = tw.textarea`
  mt-1 block px-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none
  focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition
`;

export const Select = styled.select`
  ${tw`mt-1 block px-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none
  focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition`}
  height: 42px;
  background-image: url(${image});
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2rem;
  appearance: none;
`;

export const ErrorMessage = tw.p``;

export const Label = tw.span`text-gray-600 text-sm md:text-base`;

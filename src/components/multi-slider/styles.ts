import tw from 'twin.macro';
import styled from '@emotion/styled';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

export const Wrapper = tw.div`-m-4`;

export const Button = styled.button<{ position: string }>`
  width: 40px;
  height: 40px;
  top: calc(50% - 34px);
  ${({ position }) => (position === 'left' ? 'left: 0;' : 'right: 0;')}
  ${tw`bg-white active:bg-gray-200 transition shadow-md absolute z-10 rounded-full flex items-center justify-center focus:outline-none`}
`;

export const LeftArrow = tw(ChevronLeftIcon)`text-gray-600 h-5 w-5`;

export const RightArrow = tw(ChevronRightIcon)`text-gray-600 h-5 w-5`;

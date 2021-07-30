import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${tw`absolute left-1/2 bottom-12 rounded-md shadow-md w-full md:w-5/12 p-8 bg-gray-50`}
  transform: translateX(-50%);
  z-index: 9;
`;

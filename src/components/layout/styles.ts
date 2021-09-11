import tw from 'twin.macro';
import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  ${tw`container mx-auto`};
  max-width: 100% !important;
`;

export const PageWrapper = styled.div<{ isNotFound: boolean }>`
  ${({ isNotFound }) => !isNotFound && tw`container mx-auto p-4`}
`;

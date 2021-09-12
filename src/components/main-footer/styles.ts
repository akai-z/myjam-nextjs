import tw from 'twin.macro';
import styled from '@emotion/styled';

export const FooterWrapper = tw.div`w-full bg-gray-800 border-t-4 border-black mx-auto`;

export const Wrapper = styled.div`
  ${tw`container mx-auto py-10 px-8 md:py-12 md:px-4 flex flex-col md:flex-row md:justify-between md:items-center`}
  & div:last-child {
    margin-bottom: 0 !important;
  }
`;

export const LinksWrapper = tw.div`flex flex-col mb-12 md:mb-0 space-y-2`;

export const Title = tw.h4`text-white text-lg md:text-2xl mb-1 md:mb-2`;

export const RouterLink = tw.a`text-gray-300 hover:text-white hover:underline text-sm md:text-base`;

export const Text = tw.p`text-gray-300 mb-10 text-sm md:mb-0 md:text-base pl-4`;

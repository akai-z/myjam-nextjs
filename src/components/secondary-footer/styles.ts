import tw from 'twin.macro';
import styled from '@emotion/styled';

export const FooterWrapper = tw.div`w-full bg-black mx-auto`;

export const Wrapper = tw.div`container mx-auto py-10 px-8 md:px-4 flex flex-col md:flex-row md:justify-between md:items-center`;

export const LinksWrapper = tw.div`flex flex-col mb-8 space-y-4 md:mb-0 md:flex-row md:space-x-16 md:space-y-0`;

export const RouterLink = tw.a`text-gray-300 hover:text-white hover:underline text-sm md:text-base`;

export const Text = tw.p`text-gray-300 mb-10 text-sm md:mb-0 md:text-base pl-4`;

export const SocialMediaWrapper = styled.div`
  ${tw`flex space-x-4 mb-12 md:mb-0`}
  & a {
    background-color: #fff;
    border-radius: 4px;
    padding: 5px;
  }
  & img {
    width: 32px;
    height: 32px;
  }
`;

import tw from 'twin.macro';
import styled from '@emotion/styled';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

export const Wrapper = styled.div`
  ${tw`rounded-lg px-6 py-12 lg:px-16 lg:py-32 bg-cover bg-center bg-no-repeat`}
  background-image: url(${require('../../images/home-banner.png')});
  min-height: 300px;
  @media screen and (min-width: 768px) {
    min-height: 400px;
  }
  @media screen and (min-width: 1024px) {
    min-height: 500px;
  }
`;

export const Title = tw.h1`text-gray-100 text-2xl lg:text-5xl tracking-wider font-normal`;

export const RouterLink = tw.a`
  bg-white text-gray-800 text-sm sm:text-base font-semibold transition w-max mt-12 sm:mt-24
  z-10 py-3 px-6 shadow-sm rounded-md flex items-center hover:bg-gray-100
`;

export const ArrowIcon = tw(ArrowNarrowRightIcon)`h-4 w-4 sm:h-6 sm:w-6 text-gray-800 ml-1`;

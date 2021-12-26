import tw from 'twin.macro';
import styled from '@emotion/styled';
import banner from '@images/main-banner-december.jpeg';
import mobileBanner from '@images/home-banner-mobile.jpeg';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

export const Wrapper = styled.div`
  ${tw`rounded-lg px-6 py-6 md:py-12 lg:px-16 lg:py-32 bg-cover bg-center bg-no-repeat flex flex-col justify-center`}
  background-image: url(${banner});
  min-height: 220px;
  @media screen and (max-width: 640px) {
    background-image: url(${mobileBanner});
  }
  @media screen and (min-width: 768px) {
    min-height: 375px;
    height: 375px;
  }
  @media screen and (min-width: 1024px) {
    min-height: 375px;
    height: 375px;
  }
`;

export const Title = tw.h1`text-gray-100 text-lg md:text-2xl lg:text-5xl tracking-wider font-normal md:mt-2`;

export const RouterLink = tw.a`
  bg-white text-gray-800 text-xs sm:text-base font-semibold transition w-max mt-6 md:mt-12
  z-10 py-2 md:py-3 px-3 md:px-6 shadow-sm rounded-md flex items-center hover:bg-gray-100
`;

export const ArrowIcon = tw(ArrowNarrowRightIcon)`h-4 w-4 sm:h-6 sm:w-6 text-gray-800 ml-1`;

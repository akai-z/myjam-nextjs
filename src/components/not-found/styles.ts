import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Main = styled.main`
  ${tw`min-h-screen bg-cover`}
  background-position: center;
`;

export const Wrapper = tw.div`max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48`;

export const MainText = tw.p`text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide`;

export const SecondaryText = tw.p`mt-2 text-lg font-medium text-black text-opacity-50`;

export const Title = tw.h1`mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl`;

export const LinksWrapper = tw.div`mt-6`;

export const RouterLink = tw.a`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50`;

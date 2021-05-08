import tw from 'twin.macro';

export const FooterWrapper = tw.footer`w-full bg-gray-800 mt-8 mx-auto`;

export const Wrapper = tw.div`container mx-auto py-10 px-4 flex flex-col md:flex-row md:justify-between md:items-center`;

export const LinksWrapper = tw.div`flex flex-col mb-12 pl-4 space-y-6 md:mb-0 md:flex-row md:pl-0 md:space-x-16 md:space-y-0`;

export const RouterLink = tw.a`text-gray-300 hover:text-white hover:underline text-sm md:text-base`;

export const Text = tw.p`text-gray-300 mb-10 text-sm md:mb-0 md:text-base pl-4`;

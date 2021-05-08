import tw from 'twin.macro';
import styled from '@emotion/styled';
import { ChatAlt2Icon, ShieldCheckIcon, ArchiveIcon, TruckIcon } from '@heroicons/react/outline';

export const Wrapper = styled.div`
  ${tw`grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center py-8 sm:py-14 border-b-2`}
  & path {
    stroke-width: 1 !important;
  }
`;

export const Block = tw.div`flex items-end w-full justify-start lg:justify-center space-y-3 sm:space-y-0`;

export const Title = tw.h3`text-base text-black md:text-xl`;

export const Description = tw.p`text-sm text-gray-500 md:text-base`;

const iconStyling = tw`h-10 w-10 md:h-14 md:w-14 lg:w-14 lg:w-14 text-gray-500 mr-3`;

export const SupportIcon = styled(ChatAlt2Icon)`
  ${iconStyling}
`;

export const PaymentIcon = styled(ShieldCheckIcon)`
  ${iconStyling}
`;

export const BoxIcon = styled(ArchiveIcon)`
  ${iconStyling}
`;

export const DeliveryIcon = styled(TruckIcon)`
  ${iconStyling}
`;

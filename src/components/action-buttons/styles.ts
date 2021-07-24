import tw from 'twin.macro';
import styled from '@emotion/styled';
import {
  ShoppingCartIcon,
  HomeIcon as CustomHomeIcon,
  MenuAlt2Icon,
  TagIcon as CustomTagIcon,
} from '@heroicons/react/outline';

export const Wrapper = styled.div`
  ${tw`grid grid-cols-4 fixed bottom-0 z-10 w-full md:hidden
    justify-items-center content-center bg-white`}
  box-shadow: 0 -2px 4px rgb(0 0 0 / 6%);
  & > div {
    ${tw`flex items-center justify-center py-3`}
  }
  & div:nth-child(3) {
    ${tw`relative`}
  }
`;

const iconStyle = tw`h-7 w-7 text-gray-500`;

export const CartIcon = styled(ShoppingCartIcon)`
  ${iconStyle}
`;

export const HomeIcon = styled(CustomHomeIcon)`
  ${iconStyle}
`;

export const MenuIcon = styled(MenuAlt2Icon)`
  ${iconStyle}
`;

export const TagIcon = styled(CustomTagIcon)`
  ${iconStyle}
`;

export const Qty = styled.span`
  ${tw`bg-red-400 rounded-full h-4 w-4 text-white absolute text-center`}
  top: 8px;
  right: 5px;
  font-size: 12px;
  padding: 0 !important;
  display: block !important;
`;

export const RouterLink = tw.a`cursor-pointer`;

import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  ${tw`absolute left-1/2 bottom-12 rounded-md shadow-md p-8 bg-gray-50`}
  width: 750px !important;
  transform: translateX(-50%);
  z-index: 9;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: -20px;
    width: 100%;
    height: 20px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
    z-index: 10;
    pointer-events: none;
  }
  & {
    .react-tel-input .selected-flag .flag {
      top: 52%;
    }
    .react-tel-input .form-control {
      ${tw`rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 
        focus:ring focus:ring-gray-200 focus:ring-opacity-50 transition`}
      height: 46px;
      font-size: 15px;
      padding: 5px 5px 5px 50px;
    }
    .react-tel-input .special-label {
      ${tw`text-gray-600`}
      top: -9px;
      font-size: 13px;
      padding-left: 5px;
      padding-right: 10px;
    }
  }
`;

export const Label = tw.span`text-gray-600 text-sm mb-1`;

export const Button = tw.button`uppercase tracking-wider text-sm text-white md:text-base bg-black hover:bg-opacity-75
  rounded-md px-8 py-3 md:px-10 md:py-3 focus:outline-none transition-opacity duration-300 mt-7 w-full`;

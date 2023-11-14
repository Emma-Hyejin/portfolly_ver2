import tw from 'twin.macro';
import { styled } from 'styled-components';
import { BsSearchHeart } from 'react-icons/bs';

export const SearchContainer = styled.form`
  ${tw`relative flex items-center max-w-md mx-auto min-w-min text-BASIC_TEXT`}
`;

export const SearchIcon = styled(BsSearchHeart)`
  ${tw`absolute ml-4 transition-colors duration-300 ease-in-out transform -translate-y-1/2 top-1/2 text-BASIC_TEXT`}
`;

export const SearchBox = styled.input`
  ${tw`w-full md:h-10 h-8 pl-12 bg-transparent border rounded-md text-BASIC_TEXT border-neutral-400 !outline-none`}

  &:focus {
    border: 1px solid #8580e1 !important;
  }

  &::placeholder {
    ${tw`text-gray-300`}
  }
`;

import tw from 'twin.macro';
import { styled } from 'styled-components';
import { BsSearchHeart } from 'react-icons/bs';

export const SearchContainer = tw.form`
  relative
  flex
  flex-grow
  items-center
  max-w-md
  min-w-min
  mx-auto
  text-BASIC_TEXT
`;

export const SearchIcon = styled(BsSearchHeart)`
  ${tw`
    absolute
    ml-4 
    top-1/2
    text-BASIC_TEXT
    transform -translate-y-1/2
    transition-colors duration-300 ease-in-out
  `}
`;

export const SearchBox = styled.input`
  ${tw`
    pl-12
    h-12
    text-BASIC_TEXT
    w-full
    rounded-md
    bg-transparent
    border
    border-neutral-400
  `}

  &:focus {
    ${tw`outline-none border-white`}
  }

  &::placeholder {
    ${tw`text-gray-300`}
  }
`;

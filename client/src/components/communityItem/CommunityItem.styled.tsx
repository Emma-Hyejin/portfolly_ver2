import tw from 'twin.macro';
import styled from 'styled-components';

export const CommunityItemWrapper= styled.div`
  ${tw`relative flex flex-col w-full p-4 mt-2 mb-5 border rounded-lg shadow-lg cursor-pointer h-52 md:flex-row border-BASIC_BORDER`}
`;

export const ItemUserWrapper = tw.div`
  flex
  flex-row
  md:flex-col
  items-center
  px-2
  pb-3
  md:px-5
  md:w-24
  text-center
`;

export const ItemTextWrapper = tw.div`
  flex
  flex-col
  flex-1
  text-BASIC_TEXT
  pl-3
`;

export const ItemTitle = tw.div`
  md:font-medium
  md:text-xl
  font-semibold
  text-sm
  mb-2
`;

export const ItemContent = tw.div`
  hidden
  md:font-light
  md:text-sm
  md:flex-1
`;

export const TagSection = tw.div`
  bg-BASIC_PURPLE
  text-white
  text-xs
  font-semibold
  px-4
  md:my-3
  md:mr-3
  py-1
  w-fit
  rounded-md
`;

export const ItemInfoWrapper = tw.div`
  flex
  md:flex-col
  flex-row
  justify-between
  items-end
  px-3
`;

export const ItemInfoDate = tw.div`
  font-light
  text-xs
  text-BASIC_GRAY
`;

export const ItemUserName = tw.div`
  font-normal
  text-sm
  text-BASIC_TEXT
  px-2
  md:p-0
`;

export const ItemLikeButton = tw.button`
  flex
  flex-row
  md:flex-1
  justify-center
  items-center
`;

export const ItemLikeCount = tw.div`
  text-xl
  text-BASIC_PURPLE
  font-light
  ml-2
`;

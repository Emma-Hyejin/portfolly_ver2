import tw from 'twin.macro';
import styled from 'styled-components';
import { LiaHeartSolid } from "react-icons/lia";

export const CommunityItemWrapper= styled.div`
  ${tw`
    w-full
    h-52
    flex
    flex-row
    border
    border-BASIC_BORDER
    relative
    p-4
    mt-2
    mb-5
    rounded-lg
    shadow-lg
    cursor-pointer
  `}
`;

export const ItemUserWrapper = tw.div`
  flex
  flex-col
  items-center
  px-5
`;

export const ItemTextWrapper = tw.div`
  flex
  flex-col
  flex-1
  text-BASIC_TEXT
  pl-3
`;

export const ItemTitle = tw.div`
  font-medium
  text-xl
  mb-2
`;

export const ItemContent = tw.div`
  font-light
  text-sm
  flex-1
`;

export const TagSection = tw.div`
  bg-BASIC_PURPLE
  text-white
  text-xs
  font-semibold
  px-4
  my-3
  mr-3
  py-1
  w-fit
  rounded-md
`;

export const ItemInfoWrapper = tw.div`
  flex
  flex-col
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
`;

export const ItemLikeButton = tw.button`
  bg-pink-200
  flex
  flex-row
  flex-1
  justify-center
  items-center
`;

export const ItemLikeCount = tw.div`
  text-xl
  text-BASIC_PURPLE
  font-light
  ml-2
`;

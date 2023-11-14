import RemoveBtn from '@/commons/atoms/buttons/revise-remove/RemoveBtn';
import ReviseBtn from '@/commons/atoms/buttons/revise-remove/ReviseBtn';
import { styled } from 'styled-components';
import tw from 'twin.macro';


export const DetailContainer = tw.div`
  flex
  flex-col
  mx-auto
  w-4/5
`;
export const ContentContainer = styled.div`
  ${tw`flex flex-col gap-3 px-6 w-full h-fit`}
`

export const ButtonHeader = tw.div`
  w-full py-5 px-8
`
export const SmallRowContainer = tw.div`
  flex
  flex-row
  justify-start
  gap-3
`;

const RoundedBox = tw.div`
  rounded-xl
  w-full 
`;

export const PortfolioContainer = styled(RoundedBox)`
  ${tw`
  bg-gray-50
    w-full
    py-10
    px-14
    h-fit
  `}
`;

export const SmallPortfolioContainer = styled(RoundedBox)`
  ${tw`
    w-full
    bg-pink-200
    py-10
    px-14
    my-10
    h-fit
  `}
`;

export const UserContainer = styled.div`
${tw`
  flex flex-row
  h-[120px]
  items-center
`}
  /* height: calc(100vh - 70px); */
`;

export const UserCard = styled.div`
  ${tw`flex flex-col flex-1
  py-8 gap-2 h-fit px-8
  `}
`;

export const EditButton = styled(ReviseBtn)``;
export const DeleteButton = styled(RemoveBtn)``;

export const AskCommisionBtn = styled.button`
  ${tw`
  bg-BASIC_LINE
  text-BASIC_PURPLE
  w-[200px]
  px-5
  py-2
  rounded-md
  text-base
  h-fit
  `}

  &:hover{
    background-color: #8580E1;
    color: #eeee;
  }
 
`;
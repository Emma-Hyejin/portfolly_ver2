import tw from 'twin.macro';
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  font-family: 'Do Hyeon', sans-serif;

  ${tw`
    w-screen
    h-screen
    flex
    flex-col
    items-center
    text-BASIC_TEXT
  `}
`;

export const LogoV2Img = tw.img`
  h-28
  w-52
  p-3
  mt-10
`;


export const LoginInputWrapper = tw.form`
  border
  border-BASIC_BORDER
  rounded-lg
  h-80
  w-[448px]
  p-10
  mt-10
`;

const TopLoginInput = styled.div`
  ${tw`
    w-full
    h-14
    border
    border-BASIC_BORDER
    rounded-lg
    flex
    flex-row
    items-center
  `}
  border-radius: 10px 10px 0px 0px;
  border-bottom-color: white;
`;

const BottomLoginInput = styled.div`
  ${tw`
    w-full
    h-14
    border
    border-BASIC_BORDER
    rounded-lg
    flex
    flex-row
    items-center
  `}
  border-radius: 0px 0px 10px 10px;
`;



export const LoginSubmitButton = styled.input`
  ${tw`
    w-full
    h-14
    bg-BASIC_PURPLE
    rounded-lg
    mt-16
    cursor-pointer
    text-BASIC_LINE
    items-center
    text-2xl
  `}
  &:hover{
    background-color: #999999;
  }
`;

export const LinkTextWrapper = tw.div`
  flex
  flex-row
  items-center
  w-64
  justify-between
  mt-5
  divide-x
  divide-solid 
`;

export const LoginLinkText = styled.button`
${tw`
  text-sm
  text-BASIC_GRAY
  px-3
`}

&:hover{
    color: #8580E1;
  }
`;

export const TextWrapper = tw.div`
  flex
  flex-col
  items-center
  flex-1
  justify-end
`;
export const SmallInfoText = tw.span`
  font-thin
  text-BASIC_GRAY
`;

export const SmallPointInfoText = tw.span`
  font-medium
  text-BASIC_PURPLE
`;
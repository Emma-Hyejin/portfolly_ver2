import tw from 'twin.macro';
import styled from 'styled-components';


export const InputIcon = tw.span`
  px-3
`;

export const LoginInput = tw.input`
  w-full
  h-full
  text-BASIC_GRAY
  outline-none
  mr-3
  font-light
`;

export const TopLoginInput = styled.div`
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

export const BottomLoginInput = styled.div`
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



export const MiddleLoginInput = styled.div`
    ${tw`
        w-full
        h-14
        border
        border-BASIC_BORDER
        flex
        flex-row
        items-center
    `}
    border-bottom-color: white;
    border-top-color: white;
`;


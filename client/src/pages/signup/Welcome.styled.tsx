import tw from 'twin.macro';
import styled from 'styled-components';

export const WelcomeWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    items-center
    justify-center
    absolute
    bg-white
    duration-500
    ease-in-out
    //시간 설정 필요 
`;

export const MiddleTitle = styled.div`
    ${tw`mb-7
    font-medium
    text-2xl
    text-BASIC_TEXT`}
    font-family: Inconsolata;

`;

export const MainTitle = tw.div`
    text-4xl
    font-semibold
    text-BASIC_TEXT
    mb-3
`;

export const PointMainTitle = tw.span`
text-BASIC_PURPLE
`;
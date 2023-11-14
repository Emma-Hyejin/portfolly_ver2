import { styled } from 'styled-components';
import tw from 'twin.macro';

export const DropDownItemContainer = styled.div`
    ${tw`absolute z-50 flex flex-col w-28`}
    background-color: white;
    border: 1px solid black;
    border-top: 0;
    top: 440px;
`;
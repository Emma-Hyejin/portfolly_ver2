import { styled, css } from 'styled-components';
import tw from 'twin.macro';

export const TagBody = styled.div<{ isSelected?: boolean, readOnly?: boolean }>`
    ${tw`w-fit py-1.5 px-2.5 rounded-full select-none flex`}

    background-color: #EEEE;
    border: 0.9px solid #C3C3C3;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: #8580E1;
        color:white;
    }

    ${(props) => props.isSelected && !props.readOnly &&
    css`
      border-color: #8580E1;
      background-color:#8580E1;
      color:#EEEE;
    `
  }

    .dot {
      vertical-align: middle;
      color: #484848;
    }
`;
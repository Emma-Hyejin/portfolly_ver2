import { styled, css } from 'styled-components';
import tw from 'twin.macro';

export const ImageContainer = styled.div<{ shape?: string, size: number }>`
    ${(props) => props.shape === 'circle' &&
    css`
            width: 30px;
            height: 30px;
            @media (min-width: 768px){
                width: ${props.size}px;
                height: ${props.size}px;
            }
        `
  }
`

export const FeatherImage = styled.img<{ shape?: string, size: number | string }>`
    ${(props) => props.shape === 'circle' &&
    tw`min-w-full min-h-full rounded-full select-none`}
    height: 30px;
    @media (min-width: 768px){
        height: ${(props) => typeof props.size === 'string' ? props.size : `${props.size}px`};
    }
`;
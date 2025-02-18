import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import { styled, css } from 'styled-components';
import tw from 'twin.macro';

export const EditorContainer = styled(FlexColumnContainer)`
  ${tw`md:mx-auto mx-0 h-fit w-screen md:min-w-[800px]`}
  /* border: 3px solid red; */
  /* display: inline-block; */
`

const CircleBtn = css`
    ${tw`inline-flex items-center justify-center rounded-full`}
`

const SquareBtn = css`
  ${tw`inline-flex items-center justify-center rounded-lg`}
`

export const PortfolioEditButton = styled.button<{ color: 'light' | 'dark' | 'black' | 'purple' }>`
    ${CircleBtn}
    width: 63px;
    height: 63px;
    ${(props) => props.color === 'dark' &&
    css`
            background-color: rgba(71, 70, 70, 0.62);
            border: 1px solid #EFEFEF;
            &:hover{
                background-color: rgba(81, 80, 80, 0.62);
            }
        `
  }
    ${(props) => props.color === 'light' &&
    css`
          background-color: white;
          border: 1px solid white;
        `
  }
    ${(props) => props.color === 'black' &&
    css`
        background-color: black;
        border: 1px solid black;
      `
  }

  ${SquareBtn}
    width:63px;
    height:30px;
    ${(props) => props.color === 'purple' &&
    css`
        background-color: #8580E1;
        color:#EEE;
        border: 1px solid rgba(109, 107, 107, 0.62);
      `
  }
`

export const PortfolioCheckButton = tw(PortfolioEditButton)`
  
`
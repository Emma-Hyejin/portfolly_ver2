/* 2023-07-04 홈페이지에 들어가는 모든 Input styled - 김다함*/
import { styled } from 'styled-components';

export const QuillWrapper = styled.div<{ isTitleFormOpen: boolean }>`
  z-index: 10;
  position: relative;
  border: 0;
  top: 0;
  height: 60vh;
  margin-top: 50px;
  pointer-events: ${({ isTitleFormOpen }) => isTitleFormOpen && 'none'};
  .ql-toolbar {
    padding: auto 0;
    background-color: #252525;
    border: 0;
    text-align: center;
  }
  .ql-stroke, .ql-fill {
    stroke: white;
  }
  .ql-picker-label {
    color: white;
  }
  .ql-container{
    border: 0;
  }
  .ql-editor{
    width: fit-content;
    min-width: 850px;
    max-height: calc(100vh - 30px);
  }
  border: 1px solid gray;
`
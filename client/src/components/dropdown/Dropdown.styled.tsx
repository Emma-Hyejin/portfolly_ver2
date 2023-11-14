import tw from 'twin.macro';
import { styled } from 'styled-components';


export const DropdownContainer = styled.div`
  ${tw`fixed top-0 bottom-0 left-0 right-0 z-10 items-center w-screen overflow-hidden bg-BASIC_WHITE`}
  opacity: 0; /* 초기에는 투명하게 설정 */
  max-height: 0; /* 초기에는 높이 0으로 설정 */
  transition: opacity 0.7s ease-in-out, max-height 1.7s ease-in-out; /* 트랜지션 효과 설정 */
  
  &.expanded {
    opacity: 1; /* 확장되었을 때 투명도 설정 */
    max-height: 100vh; /* 뷰포트 높이(전체 화면 높이)로 설정 */
    max-height: 100dvh;
  }
`;

export const DropdownUL = styled.ul`
    ${tw`divide-y divide-zinc-200`}
`;


export const ModalLink = styled.li`
    ${ tw`
        py-3
        text-[12px]
        font-semibold
        flex
        flex-row
        items-center
        justify-center
        cursor-pointer
    `}

    &:hover{
        ${tw` bg-HOVER_COLOR text-BASIC_WHITE`}
    }
`;
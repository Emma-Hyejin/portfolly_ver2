import tw from 'twin.macro';
import styled from 'styled-components';

export const ModalContainer = tw.div`
  bg-neutral-700/50
  w-full
  h-full
  fixed
  flex
  justify-center
  top-0
  left-0
  z-20
`;

export const ModalContent = styled.div`
  ${tw`
    absolute
    top-1/2
    left-1/2
    bg-white
    rounded-md
    px-4
    py-5
    text-center
    z-10
    w-[420px]
    flex
    flex-col
    items-center
  `}

  transform: translate(-50%, -50%);
  /* width: 300px;
  height: 200px; */

  >h1 {
    ${tw`
      font-bold
      text-2xl
      py-4
      
    `}
  }

  >p {
    ${tw`
      py-2
      mb-5
    `}
  }

  >div {
    ${tw`
    pt-4
    `}

    >button {
      ${tw`mx-3`} 
      margin-bottom: 30px;
    }
  }
`;

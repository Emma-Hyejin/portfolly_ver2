import tw from 'twin.macro';
import styled from 'styled-components';

export const DetailCntContainer = styled.div`
  ${tw`
    p-5
    shadow-md
    relative
  `}

  height: 500px;
  border-radius: 10px;
  background-color: rgb(231, 230, 251, 0.6);

  > h1 {
    font-size: 40px;
    font-weight: 700;
    ${tw`pb-2`}
  }

  > p {
    font-size: 20px;
    ${tw`
      h-5/6
      px-2
      py-5
    `}
  }

  > hr {
    ${tw`
      border
      border-gray-300
    `}
  }
`;

export const EDBtnContainer = styled.div`
  ${tw`
    flex 
    space-x-4
    mt-4`}
`;
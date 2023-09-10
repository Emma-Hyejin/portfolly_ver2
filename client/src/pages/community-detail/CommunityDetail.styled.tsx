import tw from 'twin.macro';
import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  ${tw`flex flex-col min-h-screen bg-center bg-no-repeat bg-cover mt-10`}
  padding: 0 100px;

  h2 {
    ${tw`text-xl pt-10`}
  }

  hr {
    ${tw`pb-5`}
  }
`;

export const TitleContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-start
  `}

  h1 {
    ${tw`pl-5`}
    font-size: 1.5rem;
  }
`;

export const MainContainer = tw.div`
  my-8
`;

export const CmDContainer = tw.div`
  // w-full
`;

export const CommentContainer = tw.div`
`;

export const CommentWrite = tw.div`
  
`;

export const JbWrapper = styled.div`
`;

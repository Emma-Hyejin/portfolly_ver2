import { styled } from 'styled-components';
import tw from 'twin.macro';

import { MemberProfileWrapper } from '@/commons/molecules/profile/MemberProfile.styled';

export const CommentsListWrapper = styled.div`
  ${tw`
    flex
    // justify-between
    items-center
  `}
`

export const CommentProfile = styled(MemberProfileWrapper)`
  img {
    ${tw`rounded-full`}
    width: 80px;
    height: 80px;
  }

  span {
    ${tw`mt-4 pt-2`}
    border-top: 1px solid #ccc;
    color: #ccc;
    font-size: 12px;
  }
`

export const CommentContent = styled.p`
  ${tw`
    w-3/4
    pl-5
  `}
`;
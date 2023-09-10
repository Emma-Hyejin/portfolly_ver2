import { styled } from 'styled-components';
import tw from 'twin.macro';

import { FlexBetweenWrapper, FlexColumnContainer } from '@/commons/styles/Containers.styled';

export const CommentContainer = styled(FlexColumnContainer)`
  ${tw`flex items-center rounded-sm`}
  height: 120px;
`

export const CommentWrapper = tw(FlexBetweenWrapper)`
h-full
  
`

export const CommentInput = styled.textarea`
  ${tw`w-4/5 h-full px-2 py-1 resize-none rounded-md border-[0.5px]`}
  &:focus {outline: none;}
  border-color: #ddd;
  font-size: 13px;
  color:black;
`
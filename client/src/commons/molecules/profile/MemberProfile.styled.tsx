import { styled } from 'styled-components';
import tw from 'twin.macro';

import { FlexColumnWrapper, FlexWrapper } from '@/commons/styles/Containers.styled';

export const MemberProfileWrapper = styled(FlexWrapper)`
  ${tw`h-full flex-col items-center justify-between`}
  h3 {
    color: #aaa;
  }
`

export const ColumnWrapper = styled(FlexColumnWrapper)``
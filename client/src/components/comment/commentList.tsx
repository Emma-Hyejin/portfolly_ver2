import noComment from '@/assets/noComment.png';

import {} from './commentList.styled'
import { CommentsListWrapper, CommentProfile, CommentContent } from './commentList.styled';

export default function CommentList () {
  return (
    <CommentsListWrapper>
      <CommentProfile>
        <h3>맹구씨</h3>
        <img src={noComment} alt='noComment' />
        <span>2023.09.13</span>
      </CommentProfile>
      <CommentContent>그렇대요? <br /> 거 신기한 일이네</CommentContent>
    </CommentsListWrapper>
  )
}
/* 2023-07-05 게시물 상세보기 페이지 댓글 영역 컴포넌트 UI - 김다함 */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CommentProps } from '@/types';

import { call } from '@/utils/apiService';

import Card from '@/commons/atoms/card/Card';
import Comment from '@/commons/molecules/comment/Comment';
import { FlexColumnContainer } from '@/commons/styles/Containers.styled';
import CommentWriteBox from '@/commons/molecules/comment/CommentWriteBox';
import { JbWrapper } from '@/pages/community-detail/CommunityDetail.styled';
import noComment from '@/assets/noComment.png';

export default function CommentBox({ comments = [] }: any) {
  const [currentComment, setCurrentComment] = useState('');
  const [amendComment, setAmendComment] = useState(comments);
  const [deleteId, setDeleteId] = useState(null);
  const { id: boardId } = useParams();

  const handleComment = (value: string) => {
    setCurrentComment(value);
  };

  const saveComment = () => {
    const addNewComment = () =>
      call(`/comments`, 'POST', {
        id: boardId,
        content: currentComment,
      });
    const axiosPost = async () => {
      return addNewComment()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log('댓글 등록 에러' + err));
    };

    axiosPost();
    amendComment.push({
      comments_id: comments.length + 1,
      content: currentComment,
      name: 'jhj',
      createdAt: '2023-06-21T17:34:51.3395597',
      modifiedAt: '2023-06-21T17:34:51.3395597',
      status: 'POST_ACTIVE',
    });
    setCurrentComment('');
  };

  useEffect(() => {
    const index = amendComment.findIndex((element: any) => element.comments_id === deleteId);

    // 첫번째 댓글 지울 때
    if (index === 0) {
      // 수정합시당 : 과제
      setAmendComment(amendComment.slice(1, amendComment.length));
    }

    if (index > 0) {
      setAmendComment(amendComment.slice(0, index).concat(amendComment.slice(index + 1, amendComment.length)));
    }

    setDeleteId(null);
  }, [deleteId]);

  if (amendComment.length === 0) {
    return (
      <Card>
        <JbWrapper>
          <FlexColumnContainer gap={0}>
            <img src={noComment} alt="no comments" />
          </FlexColumnContainer>
        </JbWrapper>
      </Card>
    );
  }

  return (
    <Card>
      <JbWrapper>
        <FlexColumnContainer gap={0} className="overflow-scroll">
          {/* prettier amendcomment -> ammendComments  ;; element -> amendComment*/}
          {amendComment.map((element: CommentProps) => {
            return (
              <Comment
                key={element.comments_id}
                username={element.name}
                content={element.content}
                date={element.createdAt}
                comments={element}
                setDeleteId={setDeleteId}
                setAmendComment={setAmendComment}
              />
            );
          })}
        </FlexColumnContainer>
        <CommentWriteBox saveComment={saveComment} handleComment={handleComment} isInput={currentComment} />
      </JbWrapper>
    </Card>
  );
}

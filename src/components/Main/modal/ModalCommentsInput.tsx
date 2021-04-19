import { useState, ChangeEvent, FormEvent } from 'react';
import { CommentFeedId } from '../../../api/postUploadComment';
import { BringComment } from '../../../reducers/reducer';

type ModalCommentsInputProps = {
  comments: BringComment;
  feedId: number;
  handlePostUploadComment: (comment: CommentFeedId) => void;
};

export default function ModalCommentsInput({
  feedId,
  comments,
  handlePostUploadComment,
}: ModalCommentsInputProps) {
  const comment = comments.data.comments;
  const [commentVal, setCommentVal] = useState<CommentFeedId>({
    feedId: feedId,
    comment: '',
  });

  const onCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentVal({
      feedId: feedId,
      comment: event.target.value,
    });
  };

  const onCommentSubmit = (event: FormEvent) => {
    event.preventDefault();
    handlePostUploadComment(commentVal);
    console.log(commentVal);
    setCommentVal({
      feedId: feedId,
      comment: '',
    });
  };

  return (
    <>
      <h2>CommentInput</h2>
      <form onSubmit={onCommentSubmit}>
        <input
          type="text"
          onChange={onCommentChange}
          value={commentVal.comment}
          required={true}
        />
        <button type="submit">작성하기</button>
      </form>
    </>
  );
}

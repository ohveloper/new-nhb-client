import { useState, ChangeEvent, FormEvent } from 'react';
import { CommentFeedId } from '../../../api/postUploadComment';
import { BringComment } from '../../../reducers/reducer';
import '../../../styles/mainPage.css';

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

  const onCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentVal({
      feedId: feedId,
      comment: event.target.value,
    });
  };

  const onCommentSubmit = (event: FormEvent) => {
    event.preventDefault();
    handlePostUploadComment(commentVal);
    setCommentVal({
      feedId: feedId,
      comment: '',
    });
  };

  return (
    <div id="modal-comments-textarea">
      <form onSubmit={onCommentSubmit}>
        <div className="textarea-btn-container">
          <textarea
            onChange={onCommentChange}
            value={commentVal.comment}
            required={true}
          />
          <button type="submit" className="btn comment-btn">
            댓글
          </button>
        </div>
      </form>
    </div>
  );
}

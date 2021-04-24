import { BringComment } from '../../../reducers/reducer';
import CommentDeleteButton from './CommentDeleteButton';
import '../../../styles/mainPage.css';
import { FeedIdCommentId } from '../../../api/delRemoveComment';

type ModalCommentsViewProps = {
  comments: BringComment;
  feedId: number;
  handleDelRemoveComment: (feedCommentId: FeedIdCommentId) => void;
};

export default function ModalCommentsView({
  feedId,
  comments,
  handleDelRemoveComment,
}: ModalCommentsViewProps) {
  const comment = comments.data.comments;
  return (
    <div id="modal-comments-view">
      {comment.map((comment) => {
        return (
          <div className="modal-comment-item-container">
            <div className="comment-del-btn">
              <CommentDeleteButton
                feedId={feedId}
                commentId={Number(comment.commentId)}
                handleDelRemoveComment={handleDelRemoveComment}
              />
            </div>
            <div className="modal-comment-item">
              <div className="comment-user-info">
                {comment.user.tag} {comment.user.nickName}
              </div>
              <div className="comment-content">{comment.comment}</div>
              <div className="comment-likes">{comment.commentLike}</div>
              <div className="comment-date">{comment.createdAt}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

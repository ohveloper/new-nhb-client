import { BringComment } from '../../../reducers/reducer';
import CommentDeleteButton from './CommentDeleteButton';
import '../../../styles/mainPage.css';

type ModalCommentsViewProps = {
  comments: BringComment;
};

export default function ModalCommentsView({
  comments,
}: ModalCommentsViewProps) {
  const comment = comments.data.comments;
  return (
    <div id="modal-comments-view">
      {comment.map((comment) => {
        return (
          <div className="modal-comment-item-container">
            <div className="comment-del-btn">
              <CommentDeleteButton />
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

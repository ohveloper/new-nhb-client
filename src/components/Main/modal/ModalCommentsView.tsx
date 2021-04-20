import { BringComment } from '../../../reducers/reducer';
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
      <h2>CommentView</h2>
      {comment.map((comment) => {
        return (
          <div className="modal-comment-item" key={comment.commentId}>
            <div>
              {comment.user.tag} {comment.user.nickName}
            </div>
            <div>{comment.comment}</div>
            <div>
              {comment.commentLike} {comment.createdAt}
            </div>
          </div>
        );
      })}
    </div>
  );
}

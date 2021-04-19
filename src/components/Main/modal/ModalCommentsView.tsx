import { BringComment } from '../../../reducers/reducer';

type ModalCommentsViewProps = {
  comments: BringComment;
};

export default function ModalCommentsView({
  comments,
}: ModalCommentsViewProps) {
  const comment = comments.data.comments;
  return (
    <>
      <h2>CommentView</h2>
      {comment.map((comment) => {
        return (
          <div key={comment.commentId}>
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
    </>
  );
}

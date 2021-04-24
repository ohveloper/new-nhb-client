import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FeedIdCommentId } from '../../../api/delRemoveComment';

type CommentDeleteButtonProps = {
  feedId: number;
  commentId: number;
  handleDelRemoveComment: (FeedIdCommentId: FeedIdCommentId) => void;
};

export default function CommentDeleteButton({
  feedId,
  commentId,
  handleDelRemoveComment,
}: CommentDeleteButtonProps) {
  const onClickDelete = () => {
    const feedCommentId = { data: { feedId, commentId } };
    handleDelRemoveComment(feedCommentId);
  };

  return (
    <div className="comment-del-btn-container">
      <FontAwesomeIcon icon={faTimes} onClick={onClickDelete} />
    </div>
  );
}

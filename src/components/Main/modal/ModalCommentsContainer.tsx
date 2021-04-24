import { CommentFeedId } from '../../../api/postUploadComment';
import { BringComment } from '../../../reducers/reducer';
import ModalCommentsInput from './ModalCommentsInput';
import ModalCommentsView from './ModalCommentsView';
import '../../../styles/mainPage.css';
import { FeedIdCommentId } from '../../../api/delRemoveComment';

type ModalCommentsContainerProps = {
  feedId: number;
  comments: BringComment;
  handlePostUploadComment: (comment: CommentFeedId) => void;
  handleDelRemoveComment: (feedCommentId: FeedIdCommentId) => void;
};

export default function ModalCommentsContainer({
  feedId,
  comments,
  handlePostUploadComment,
  handleDelRemoveComment,
}: ModalCommentsContainerProps) {
  return (
    <div id="modal-comments-container">
      <ModalCommentsInput
        feedId={Number(feedId)}
        comments={comments}
        handlePostUploadComment={handlePostUploadComment}
      />
      <ModalCommentsView
        feedId={Number(feedId)}
        comments={comments}
        handleDelRemoveComment={handleDelRemoveComment}
      />
    </div>
  );
}

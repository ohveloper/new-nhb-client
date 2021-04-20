import { CommentFeedId } from '../../../api/postUploadComment';
import { BringComment } from '../../../reducers/reducer';
import ModalCommentsInput from './ModalCommentsInput';
import ModalCommentsView from './ModalCommentsView';
import '../../../styles/mainPage.css';

type ModalCommentsContainerProps = {
  feedId: number;
  comments: BringComment;
  handlePostUploadComment: (comment: CommentFeedId) => void;
};

export default function ModalCommentsContainer({
  feedId,
  comments,
  handlePostUploadComment,
}: ModalCommentsContainerProps) {
  return (
    <div id="modal-comments-container">
      <ModalCommentsInput
        feedId={Number(feedId)}
        comments={comments}
        handlePostUploadComment={handlePostUploadComment}
      />
      <ModalCommentsView comments={comments} />
    </div>
  );
}

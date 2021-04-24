import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CommentDeleteButton() {
  return (
    <div className="comment-del-btn-container">
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
}

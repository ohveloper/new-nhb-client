import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faExternalLinkAlt,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import '../../../styles/mainPage.css';

type ModalButtonGroupProps = {
  likeNum: string;
  commentNum: number;
};

export default function ModalButtonGroup({
  likeNum,
  commentNum,
}: ModalButtonGroupProps) {
  const commentIcon = <FontAwesomeIcon icon={faComment} />;
  const starIcon = <FontAwesomeIcon icon={faStar} />;
  const shareIcon = <FontAwesomeIcon icon={faExternalLinkAlt} />;
  const reportIcon = <FontAwesomeIcon icon={faExclamationTriangle} />;

  return (
    <div className="poem-button-group">
      <div className="comment-container">
        <div className="comment-icon">{commentIcon}</div>
        <div className="comment-num">{commentNum}</div>
      </div>
      <div className="like-container">
        <div className="like-icon">{starIcon}</div>
        <div className="like-num">{likeNum}</div>
      </div>
      <div className="share-container">
        <div className="share-icon">{shareIcon}</div>
      </div>
      <div className="report-container">
        <div className="report-icon">{reportIcon}</div>
      </div>
    </div>
  );
}

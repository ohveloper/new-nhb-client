import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faExternalLinkAlt,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/mainPage.css';
import { LikeFeedId } from '../../api/postLikeFeed';

type PoemButtonGroupProps = {
  feedId: number;
  likeNum: string;
  commentNum: number;
  handleModal: (feedId: number) => void;
  handlePostLikeFeed: (feedId: LikeFeedId) => void;
};

export default function PoemButtonGroup({
  feedId,
  likeNum,
  commentNum,
  handleModal,
  handlePostLikeFeed,
}: PoemButtonGroupProps) {
  const ref: any = useRef();
  const commentIcon = <FontAwesomeIcon icon={faComment} />;
  const starIcon = <FontAwesomeIcon icon={faStar} />;
  const shareIcon = <FontAwesomeIcon icon={faExternalLinkAlt} />;
  const reportIcon = <FontAwesomeIcon icon={faExclamationTriangle} />;

  const onCommentIconClick = () => {
    const feedid = ref.current.dataset.feedid;
    handleModal(feedid);
  };

  const onLikeIconClick = () => {
    const feedid = ref.current.dataset.feedid;
    handlePostLikeFeed(feedid);
    console.log('!');
  };

  return (
    <div className="poem-button-group">
      <div
        className="comment-container"
        onClick={onCommentIconClick}
        data-feedid={feedId}
        ref={ref}
      >
        <div className="comment-icon">{commentIcon}</div>
        <div className="comment-num">{commentNum}</div>
      </div>
      <div
        className="like-container"
        onClick={onLikeIconClick}
        data-feedid={feedId}
        ref={ref}
      >
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

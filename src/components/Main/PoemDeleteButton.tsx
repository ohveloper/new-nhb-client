import { FeedId } from '../../api/delRemoveFeed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import '../../styles/mainPage.css';

type PoemDeleteButtonProps = {
  feedId: FeedId;
  handleDelete: (feedId: FeedId) => void;
};

export default function PoemDeleteButton({
  feedId,
  handleDelete,
}: PoemDeleteButtonProps) {
  const onClickDelete = () => {
    handleDelete(feedId);
  };

  return (
    <>
      <FontAwesomeIcon icon={faTrashAlt} onClick={onClickDelete} />
    </>
  );
}

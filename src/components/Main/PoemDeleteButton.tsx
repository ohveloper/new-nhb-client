import { FeedId } from '../../api/delRemoveFeed';
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
    <button className="poem-delete-button" onClick={onClickDelete}>
      DELETE
    </button>
  );
}

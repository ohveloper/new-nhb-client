import { FeedId } from '../../api/delRemoveFeed';

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

  return <button onClick={onClickDelete}>DELETE</button>;
}

import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';
import PoemView from './PoemView';

type MainpagePoemContainerProps = {
  poem: Welcome;
  isLoading: boolean;
  handleEdit: () => void;
  handleDelete: (feedId: FeedId) => void;
};

export default function MainpagePoemContainer({
  poem,
  isLoading,
  handleEdit,
  handleDelete,
}: MainpagePoemContainerProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const userFeeds = state.userFeeds.data?.data.userFeeds;

  if (userFeeds?.length === 0) {
    return <div>오늘 첫 글의 주인공이 되어 볼까요?😉</div>;
  }
  return (
    <>
      <h2>PoemContainer</h2>
      <PoemView
        poem={poem}
        isLoading={isLoading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

import MainpagePoemContainer from './MainpagePoemContainer';
import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';

type MainpagePoemListProps = {
  poem: Welcome;
  isLoading: boolean;
  handleDelete: (feedId: FeedId) => void;
};

export default function MainpagePoemList({
  poem,
  isLoading,
  handleDelete,
}: MainpagePoemListProps) {
  return (
    <>
      <h1>MainpagePoemList</h1>
      <MainpagePoemContainer
        poem={poem}
        isLoading={isLoading}
        handleDelete={handleDelete}
      />
    </>
  );
}

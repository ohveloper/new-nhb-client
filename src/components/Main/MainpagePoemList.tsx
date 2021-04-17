import MainpagePoemContainer from './MainpagePoemContainer';
import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';

type MainpagePoemListProps = {
  poem: Welcome;
  isLoading: boolean;
  handleDelete: (feedId: FeedId) => void;
  handleEdit: () => void;
};

export default function MainpagePoemList({
  poem,
  isLoading,
  handleEdit,
  handleDelete,
}: MainpagePoemListProps) {
  return (
    <>
      <h1>MainpagePoemList</h1>
      <MainpagePoemContainer
        poem={poem}
        isLoading={isLoading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';
import MainpagePoemContainer from './MainpagePoemContainer';
import '../../styles/mainPage.css';

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
    <div id="main-page-poem-list">
      <h1>MainpagePoemList</h1>
      <MainpagePoemContainer
        poem={poem}
        isLoading={isLoading}
        handleDelete={handleDelete}
      />
    </div>
  );
}

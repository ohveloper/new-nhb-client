import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';
import MainpagePoemContainer from './MainpagePoemContainer';
import '../../styles/mainPage.css';

type MainpagePoemListProps = {
  poem: Welcome;
  handleDelete: (feedId: FeedId) => void;
  handleModal: (feedId: number) => void;
  itemId: number;
};

export default function MainpagePoemList({
  poem,
  handleDelete,
  handleModal,
  itemId,
}: MainpagePoemListProps) {
  return (
    <div id="main-page-poem-list">
      <MainpagePoemContainer
        poem={poem}
        handleDelete={handleDelete}
        handleModal={handleModal}
        itemId={itemId}
      />
    </div>
  );
}

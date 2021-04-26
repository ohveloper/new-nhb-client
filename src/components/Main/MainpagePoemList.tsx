import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';
import MainpagePoemContainer from './MainpagePoemContainer';
import '../../styles/mainPage.css';
import { LikeFeedId } from '../../api/postLikeFeed';

type MainpagePoemListProps = {
  poem: Welcome;
  handleDelete: (feedId: FeedId) => void;
  handleModal: (feedId: number) => void;
  itemId: number;
  handlePostLikeFeed: (feedId: LikeFeedId) => void;
};

export default function MainpagePoemList({
  poem,
  handleDelete,
  handleModal,
  itemId,
  handlePostLikeFeed,
}: MainpagePoemListProps) {
  return (
    <div id="main-page-poem-list">
      <MainpagePoemContainer
        poem={poem}
        handleDelete={handleDelete}
        handleModal={handleModal}
        handlePostLikeFeed={handlePostLikeFeed}
        itemId={itemId}
      />
    </div>
  );
}

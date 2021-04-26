import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';
import PoemView from './PoemView';
import '../../styles/mainPage.css';
import { LikeFeedId } from '../../api/postLikeFeed';

type MainpagePoemContainerProps = {
  poem: Welcome;
  handleDelete: (feedId: FeedId) => void;
  handleModal: (feedId: number) => void;
  itemId: number;
  handlePostLikeFeed: (feedId: LikeFeedId) => void;
};

export default function MainpagePoemContainer({
  poem,
  handleDelete,
  handleModal,
  itemId,
  handlePostLikeFeed,
}: MainpagePoemContainerProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const userFeeds = state.userFeeds.data?.data.userFeeds;

  if (userFeeds?.length === 0) {
    return <div>오늘 첫 글의 주인공이 되어 볼까요?😉</div>;
  }
  return (
    <div id="main-page-poem-container">
      <div className="gap"></div>
      <PoemView
        poem={poem}
        handleDelete={handleDelete}
        handleModal={handleModal}
        handlePostLikeFeed={handlePostLikeFeed}
        itemId={itemId}
      />
    </div>
  );
}

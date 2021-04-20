import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';
import { RootState } from '../../reducers';
import PoemInfo from './PoemInfo';
import PoemButtonGroup from './PoemButtonGroup';
import PoemDeleteButton from './PoemDeleteButton';
import '../../styles/mainPage.css';

type poemViewProps = {
  poem: Welcome;
  isLoading: boolean;
  handleDelete: (feedId: FeedId) => void;
};

export default function PoemView({
  poem,
  isLoading,
  handleDelete,
}: poemViewProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const { userFeeds } = poem.data;
  const userId = state.userInfo.data?.data.userInfo.userId;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {userFeeds.map((feed) => {
        const delFeedId = {
          data: { feedId: feed.feedId },
        };
        return (
          <div key={feed.feedId}>
            <div>{feed.feedId}</div>
            {userId === Number(feed.user.userId) ? (
              <>
                <PoemDeleteButton
                  handleDelete={handleDelete}
                  feedId={delFeedId}
                />
              </>
            ) : (
              <div></div>
            )}

            <PoemInfo
              userTag={feed.user.tag}
              nickName={feed.user.nickName}
              createdAt={feed.createdAt}
            />
            <Link to={`/main/${feed.feedId}`}>
              <div className="poem-view">
                {feed.content.map((word, idx) => {
                  let head;
                  if (word !== null) {
                    head = word.slice(0, 1);
                    // const tail = word.slice(1);
                  }
                  const key = String(idx) + String(feed.feedId);
                  return (
                    <div key={key}>
                      [{head}]{word}
                    </div>
                  );
                })}
              </div>
            </Link>
            <PoemButtonGroup
              likeNum={feed.likeNum}
              commentNum={feed.commentNum}
            />
          </div>
        );
      })}
    </>
  );
}

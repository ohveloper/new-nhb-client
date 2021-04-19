import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';
import PoemInfo from './PoemInfo';
import PoemButtonGroup from './PoemButtonGroup';
import PoemEditButton from './PoemEditButton';
import PoemDeleteButton from './PoemDeleteButton';
import { RootState } from '../../reducers';

type poemViewProps = {
  poem: Welcome;
  isLoading: boolean;
  handleEdit: () => void;
  handleDelete: (feedId: FeedId) => void;
};

export default function PoemView({
  poem,
  isLoading,
  handleEdit,
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
          <Link to={`/main/${feed.feedId}`}>
            <div key={feed.feedId}>
              <div>{feed.feedId}</div>
              {userId === Number(feed.user.userId) ? (
                <>
                  <PoemEditButton handleEdit={handleEdit} />
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
              <div>
                {feed.content.map((word, idx) => {
                  const head = word.slice(0, 1);
                  // const tail = word.slice(1);
                  const key = String(idx) + String(feed.feedId);
                  return (
                    <div key={key}>
                      [{head}]{word}
                    </div>
                  );
                })}
              </div>
              <PoemButtonGroup
                likeNum={feed.likeNum}
                commentNum={feed.commentNum}
              />
            </div>
          </Link>
        );
      })}
    </>
  );
}

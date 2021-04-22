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
          <div id="poem-view-container">
            <div key={feed.feedId} className="poem-view">
              {userId === Number(feed.user.userId) && (
                <div className="del-btn-container">
                  <PoemDeleteButton
                    handleDelete={handleDelete}
                    feedId={delFeedId}
                  />
                </div>
              )}
              <div className="pic-info-content-container">
                <div className="user-pic-container">
                  <div className="user-pic"></div>
                </div>
                <div className="info-content-container">
                  <PoemInfo
                    userTag={feed.user.tag}
                    nickName={feed.user.nickName}
                    createdAt={feed.createdAt}
                  />

                  <Link to={`/main/${feed.feedId}`}>
                    <div className="poem-content-container">
                      {feed.content.map((word, idx) => {
                        let head;
                        if (word !== null) {
                          head = word.slice(0, 1);
                          // const tail = word.slice(1);
                        }
                        const key = String(idx) + String(feed.feedId);
                        return (
                          <div key={key} className="poem-content">
                            [{head}]{word}
                          </div>
                        );
                      })}
                    </div>
                  </Link>
                </div>
              </div>
              <PoemButtonGroup
                likeNum={feed.likeNum}
                commentNum={feed.commentNum}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

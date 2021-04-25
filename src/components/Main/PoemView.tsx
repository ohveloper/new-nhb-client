import { useSelector } from 'react-redux';
import { UserFeeds, Welcome } from '../../reducers/reducer';
import { FeedId } from '../../api/delRemoveFeed';
import { RootState } from '../../reducers';
import PoemInfo from './PoemInfo';
import PoemButtonGroup from './PoemButtonGroup';
import PoemDeleteButton from './PoemDeleteButton';
import PoemContent from './PoemContent';
import '../../styles/mainPage.css';
import { useState } from 'react';
import { postBringFeedT } from '../../api/postBringFeeds';

type poemViewProps = {
  poem: Welcome;
  handleDelete: (feedId: FeedId) => void;
  handleModal: (feedId: number) => void;
  itemId: number;
};

export default function PoemView({
  poem,
  handleDelete,
  handleModal,
  itemId,
}: poemViewProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const { userFeeds } = poem.data;
  const userId = state.userInfo.data?.data.userInfo.userId;

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      {poem &&
        userFeeds.map((feed, idx) => {
          const delFeedId = {
            data: { feedId: feed.feedId },
          };
          return (
            <div id="poem-view-container">
              <div>{idx}</div>
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

                    <PoemContent
                      feed={feed}
                      handleModal={handleModal}
                      itemId={itemId}
                    />
                  </div>
                </div>
                <PoemButtonGroup
                  feedId={feed.feedId}
                  likeNum={feed.likeNum}
                  commentNum={feed.commentNum}
                  handleModal={handleModal}
                />
              </div>
            </div>
          );
        })}
    </>
  );
}

import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  postBringUserInfoThunk,
  postBringFeedsThunk,
  postLikeFeedThunk,
  getRankThunk,
  postUploadFeedThunk,
} from '../actions/getInfoActions';

export interface FeedId {
  feedId: number;
}
export default function ApiTestPage() {
  const state = useSelector((state: RootState) => state.reducer);

  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(postBringFeedsThunk({ limit: 3, feedId: 2 }));
    dispatch(postBringUserInfoThunk({ userId: 1 }));
    dispatch(postLikeFeedThunk({ feedId: 1 }));
    dispatch(getRankThunk());
    dispatch(
      postUploadFeedThunk({
        content: ['시장에 갔다', '장날이다'],
        word: '시장',
      })
    );
  };

  return (
    <div>
      <div>ApiTestPage</div>
      <button onClick={onClickHandler}>api</button>
      <div>{state.userInfo.loading && 'userInfo 로딩'}</div>
      <div>{state.userInfo.error && 'userInfo 에러'}</div>
      <div>{state.userInfo.data && 'userInfo 완료'}</div>
      <div>{state.userFeeds.loading && 'userFeeds 로딩'}</div>
      <div>{state.userFeeds.error && 'userFeeds 에러'}</div>
      <div>{state.userFeeds.data && 'userFeeds 완료'}</div>
      <div>{state.rank.loading && 'rank 로딩'}</div>
      <div>{state.rank.error && 'rank 에러'}</div>
      <div>{state.rank.data && 'rank 완료'}</div>
      <div>{state.likeFeed.loading && 'likeFeed 로딩'}</div>
      <div>{state.likeFeed.error && 'likeFeed 에러'}</div>
      <div>{state.likeFeed.data && 'likeFeed 완료'}</div>
      <div>{state.uploadFeed.loading && 'uploadFeed 로딩'}</div>
      <div>{state.uploadFeed.error && 'uploadFeed 에러'}</div>
      <div>{state.uploadFeed.data && 'uploadFeed 완료'}</div>
    </div>
  );
}

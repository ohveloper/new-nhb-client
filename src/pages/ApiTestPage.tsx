import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  postBringUserInfoThunk,
  postBringFeedsThunk,
  postLikeFeedThunk,
  getRankThunk,
  postUploadFeedThunk,
  postBringCommentThunk,
} from '../actions/getInfoActions';
import { delRemoveFeedT } from '../api/delRemoveFeed';

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
        content: ['여러분', '행쇼'],
        word: '여행',
      })
    );
    delRemoveFeedT({ data: { feedId: 8 } })
      .then(() => console.log('done'))
      .catch((e) => console.log(e));
    dispatch(postBringCommentThunk({ feedId: 1 }));
  };

  return (
    <div>
      <div>ApiTestPage</div>
      <button onClick={onClickHandler}>api</button>
      <div>{state.userInfo.loading && 'post bring userInfo 로딩'}</div>
      <div>{state.userInfo.error && 'post bring userInfo 에러'}</div>
      <div>{state.userInfo.data && 'post bring userInfo 완료'}</div>
      <div>{state.userFeeds.loading && 'post userFeeds 로딩'}</div>
      <div>{state.userFeeds.error && 'post userFeeds 에러'}</div>
      <div>{state.userFeeds.data && 'post userFeeds 완료'}</div>
      <div>{state.rank.loading && 'get rank 로딩'}</div>
      <div>{state.rank.error && 'get rank 에러'}</div>
      <div>{state.rank.data && 'get rank 완료'}</div>
      <div>{state.likeFeed.loading && 'post likeFeed 로딩'}</div>
      <div>{state.likeFeed.error && 'post likeFeed 에러'}</div>
      <div>{state.likeFeed.data && 'post likeFeed 완료'}</div>
      <div>{state.uploadFeed.loading && 'post uploadFeed 로딩'}</div>
      <div>{state.uploadFeed.error && 'post uploadFeed 에러'}</div>
      <div>{state.uploadFeed.data && 'post uploadFeed 완료'}</div>
      <div>{state.comments.loading && 'post bring comments 로딩'}</div>
      <div>{state.comments.error && 'post bring comments 에러'}</div>
      <div>{state.comments.data && 'post bring comments 완료'}</div>
    </div>
  );
}

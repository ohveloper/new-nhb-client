import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  postBringUserInfoThunk,
  postBringFeedsThunk,
  postLikeFeedThunk,
  getRankThunk,
  postUploadFeedThunk,
  postBringCommentThunk,
  postSignUpThunk,
  postLogInThunk,
} from '../actions/getInfoActions';
import { delRemoveFeedT } from '../api/delRemoveFeed';
import { postLikeCommentT } from '../api/postLikeComment';
import { postUploadCommentT } from '../api/postUploadComment';
import { delRemoveCommentT } from '../api/delRemoveComment';
import { patchEditCommentT } from '../api/patchEditComment';
import { postSendAuthEmailT } from '../api/postSendAuthEmail';
import { patchEditUserInfoT } from '../api/patchEditUserInfo';
import { patchEditTagsT } from '../api/patchEditTag';
import { delUserWithdrawalT } from '../api/delUserWithdrawal';
import { postSignUpT } from '../api/postSignUp';

export interface FeedId {
  feedId: number;
}
export default function ApiTestPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const postBringUserInfoHandler = () => {
    dispatch(postBringUserInfoThunk({ userId: 1 }));
  };
  const postBringFeedsHandler = () => {
    dispatch(postBringFeedsThunk({ topic: '여행', limit: 3, feedId: 2 }));
  };
  const getRankHandler = () => {
    dispatch(getRankThunk());
  };
  const postLikeFeedHandler = () => {
    dispatch(postLikeFeedThunk({ feedId: 45 }));
  };
  const postUploadFeedHandler = () => {
    dispatch(
      postUploadFeedThunk({
        content: ['여러분', '행쇼'],
        word: '여행',
      })
    );
  };
  const postBringCommentHandler = () => {
    dispatch(postBringCommentThunk({ feedId: 1 }));
  };
  const postSignUpHandler = () => {
    postSignUpT({ authCode: '89iw9zujket' })
      .then((result) => {
        if (result) {
          console.log(result);
          console.log(result.data);
          console.log(result.data.accessToken);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postLoginHandler = () => {
    dispatch(postLogInThunk({ authCode: 'q6wfeelkvlj' }));
    console.log(state.login.data);
  };
  const delRemoveFeedHandler = () => {
    delRemoveFeedT({ data: { feedId: 6 } })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };
  const postLikeCommentHandler = () => {
    postLikeCommentT({ commentId: 2 })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };
  const postUploadCommentHandler = () => {
    postUploadCommentT({ comment: 'hello world', feedId: 1 })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };
  const delRemoveCommentHandler = () => {
    delRemoveCommentT({ data: { feedId: 5, commentId: 4 } })
      .then((x) => console.log(x))
      .catch((x) => console.log(x));
  };
  const patchEditCommentHandler = () => {
    patchEditCommentT({ comment: 'hello', commentId: 2 })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };

  const postSendAuthEmailHandler = () => {
    postSendAuthEmailT({ email: 'ohveloper@gmail.com' })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };

  const patchEditUserInfoHandler = () => {
    patchEditUserInfoT({
      avatarUrl: 'urls',
      nickName: '시민박명수',
      introduction: '너와나의 연결고리',
    })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };
  const patchEditTagsHandler = () => {
    patchEditTagsT({ tagName: 'newbie' })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };
  const delUserWithdrawalHandler = () => {
    delUserWithdrawalT()
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div>
        <h1>ApiTestPage</h1>
      </div>
      <h1>redux</h1>
      <div>
        <button onClick={postBringUserInfoHandler}>post bring userInfo</button>
        {state.userInfo.loading && 'post bring userInfo 로딩'}
        {state.userInfo.error && 'post bring userInfo 에러'}
        {state.userInfo.data && 'post bring userInfo 완료'}
      </div>
      <div>
        <button onClick={postBringFeedsHandler}>post bring Feeds</button>
        {state.userFeeds.loading && 'post bring Feeds 로딩'}
        {state.userFeeds.error && 'post bring Feeds 에러'}
        {state.userFeeds.data && 'post bring Feeds 완료'}
      </div>
      <div>
        <button onClick={getRankHandler}>get Rank</button>
        {state.rank.loading && 'get rank 로딩'}
        {state.rank.error && 'get rank 에러'}
        {state.rank.data && 'get rank 완료'}
      </div>
      <div>
        <button onClick={postLikeFeedHandler}>post Like Feed</button>
        {state.likeFeed.loading && 'post likeFeed 로딩'}
        {state.likeFeed.error && 'post likeFeed 에러'}
        {state.likeFeed.data && 'post likeFeed 완료'}
      </div>
      <div>
        <button onClick={postUploadFeedHandler}>post Upload Feed</button>
        {state.uploadFeed.loading && 'post uploadFeed 로딩'}
        {state.uploadFeed.error && 'post uploadFeed 에러'}
        {state.uploadFeed.data && 'post uploadFeed 완료'}
      </div>
      <div>
        <button onClick={postBringCommentHandler}>post Bring Comment</button>
        {state.comments.loading && 'post bring comments 로딩'}
        {state.comments.error && 'post bring comments 에러'}
        {state.comments.data && 'post bring comments 완료'}
      </div>
      <div>
        <button onClick={postSignUpHandler}>post SignUp</button>
        {state.signup.loading && 'post signup 로딩'}
        {state.signup.error && 'post signup 에러'}
        {state.signup.data && 'post signup 완료'}
      </div>
      <div>
        <button onClick={postLoginHandler}>post login</button>
        {state.login.loading && 'post login 로딩'}
        {state.login.error && 'post login 에러'}
        {state.login.data && 'post login 완료'}
      </div>
      <div>
        <h1>axios 요청만</h1>
        <div>
          del RemoveFeedT <button onClick={delRemoveFeedHandler}>요청</button>
        </div>
        <div>
          post LikeCommentT 완료
          <button onClick={postLikeCommentHandler}>요청</button>
        </div>
        <div>
          post UploadCommentT 완료
          <button onClick={postUploadCommentHandler}>요청</button>
        </div>
        <div>
          delete RemoveCommetT 완료
          <button onClick={delRemoveCommentHandler}>요청</button>
        </div>
        <div>
          patch EditCommentT 완료
          <button onClick={patchEditCommentHandler}>요청</button>
        </div>
        <div>
          post SendAuthEmailT 완료
          <button onClick={postSendAuthEmailHandler}>요청</button>
        </div>
        <div>
          patch EditUserInfoT 완료
          <button onClick={patchEditUserInfoHandler}>요청</button>
        </div>
        <div>
          patch EditTagsT 완료
          <button onClick={patchEditTagsHandler}>요청</button>
        </div>
        <div>
          del UserWithdrawalT 완료
          <button onClick={delUserWithdrawalHandler}>요청</button>
        </div>
      </div>
    </div>
  );
}

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
import { postLikeCommentT } from '../api/postLikeComment';
import { postUploadCommentT } from '../api/postUploadComment';
import { delRemoveCommentT } from '../api/delRemoveComment';
import { patchEditCommentT } from '../api/patchEditComment';
import { postSendAuthEmailT } from '../api/postSendAuthEmail';
import { postSignUpT } from '../api/postSignUp';
import { postLoginT } from '../api/postLogin';
import { patchEditUserInfoT } from '../api/patchEditUserInfo';
import { patchEditTagsT } from '../api/patchEditTag';
import { delUserWithdrawalT } from '../api/delUserWithdrawal';

export interface FeedId {
  feedId: number;
}
export default function ApiTestPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(postBringFeedsThunk({ topic: '여행', limit: 3, feedId: 2 }));
    dispatch(postBringUserInfoThunk({ userId: 1 }));
    dispatch(postLikeFeedThunk({ feedId: 1 }));
    dispatch(getRankThunk());
    dispatch(
      postUploadFeedThunk({
        content: ['여러분', '행쇼'],
        word: '여행',
      })
    );
    dispatch(postBringCommentThunk({ feedId: 1 }));
  };
  const delRemoveFeedHandler = () => {
    delRemoveFeedT({ data: { feedId: 9 } })
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
  const postSignUpHandler = () => {
    postSignUpT({ authCode: 'z1ipytnj3eg' })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };
  const postLoginHandler = () => {
    postLoginT({ authCode: 'zke2ojqs5dn' })
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
          post SignUpT 완료
          <button onClick={postSignUpHandler}>요청</button>
        </div>
        <div>
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE4Mjk0MzA0LCJleHAiOjE2MTgzMTIzMDR9.lm-N89YU5BM30emDj0gzbUobrbJkdUkZOqIFitx_X8E"
        </div>
        <div>
          post Login 완료
          <button onClick={postLoginHandler}>요청</button>
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

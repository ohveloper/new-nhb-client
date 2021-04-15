<<<<<<< HEAD
=======
export const GET_USER_INFO = 'GET_USER_INFO' as const;
export const GET_PRIVATE_FEEDS = 'GET_PRIVATE_FEEDS' as const;
export const GET_RANK = 'GET_RANK' as const;
export const GET_COMMENTS = 'GET_COMMENTS' as const;
export const GET_USER_FEEDS = 'GET_USER_FEEDS' as const;

>>>>>>> 45dc1182dc0c1625d3ff3f1231f7ed66accd96c9
import { Dispatch } from 'redux';
import { postBringUserInfoT, UUID } from '../api/postBringUserInfo';
import { postBringFeedT } from '../api/postBringFeeds';
import { FeedId, postLikeFeedT } from '../api/postLikeFeed';
import { Feed } from '../api/postBringFeeds';
import { getRankT } from '../api/getRank';
import { Content, postUploadFeedT } from '../api/postUploadFeed';
import { postBringCommentT } from '../api/postBringComment';
import { AuthCode, postSignUpT } from '../api/postSignUp';
import { postLoginT } from '../api/postLogin';
<<<<<<< HEAD
import {
  getRankAsync,
  postBringCommentAsync,
  postBringUserInfoAsync,
  postLikeFeedAsync,
  postLogInAsync,
  postSignUpAsync,
  postUploadFeedsAsync,
} from './actionTypes';
=======

import {
  postLogInAsync,
  postBringCommentAsync,
  postSignUpAsync,
  postLikeFeedAsync,
  postUploadFeedsAsync,
  postBringFeedsAsync,
  postBringUserInfoAsync,
  getRankAsync,
} from '../actions/actionTypes';
>>>>>>> 45dc1182dc0c1625d3ff3f1231f7ed66accd96c9

export function postLogInThunk(authCode: AuthCode) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postLogInAsync;
    dispatch(request());
    try {
      const accessToken = await postLoginT(authCode);
      dispatch(success(accessToken));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postBringCommentThunk(feedId: FeedId) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postBringCommentAsync;
    dispatch(request());
    try {
      const bringComment = await postBringCommentT(feedId);
      dispatch(success(bringComment));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postSignUpThunk(authCode: AuthCode) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postSignUpAsync;
    dispatch(request());
    try {
      const signup = await postSignUpT(authCode);
      dispatch(success(signup));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postLikeFeedThunk(feedId: FeedId, accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postLikeFeedAsync;
    dispatch(request());
    try {
      const likeFeed = await postLikeFeedT(feedId, accessToken);
      dispatch(success(likeFeed));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postUploadFeedThunk(content: Content, accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postUploadFeedsAsync;
    dispatch(request());
    try {
      const uploadFeed = await postUploadFeedT(content, accessToken);
      dispatch(success(uploadFeed));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postBringUserInfoThunk(userId: UUID, accessToken: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postBringUserInfoAsync;
    dispatch(request());

    try {
      const userInfo = await postBringUserInfoT(userId, accessToken);
      dispatch(success(userInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getRankThunk() {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getRankAsync;
    dispatch(request());
    try {
      const rank = await getRankT();
      dispatch(success(rank));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

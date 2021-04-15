export const GET_USER_INFO = 'GET_USER_INFO' as const;
export const GET_PRIVATE_FEEDS = 'GET_PRIVATE_FEEDS' as const;
export const GET_RANK = 'GET_RANK' as const;
export const GET_COMMENTS = 'GET_COMMENTS' as const;
export const GET_USER_FEEDS = 'GET_USER_FEEDS' as const;

import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { postBringUserInfoT, UUID } from '../api/postBringUserInfo';
import { postBringFeedT } from '../api/postBringFeeds';
import { FeedId, postLikeFeedT } from '../api/postLikeFeed';

import { Feed } from '../api/postBringFeeds';
import {
  PrivateFeed,
  UserInfo,
  Rank,
  Comment,
  UserFeed,
} from '../reducers/initialState';
import { getRankT } from '../api/getRank';
import { BringComment, PrivateFeedT, Welcome } from '../reducers/reducer';
import { UserInfoT } from '../reducers/reducer';
import { FeedLike } from '../api/postLikeFeed';
import { Content, postUploadFeedT, UploadFeed } from '../api/postUploadFeed';
import { postBringCommentT } from '../api/postBringComment';
import { AuthCode, postSignUpT, SignUp } from '../api/postSignUp';
import { AccessToken, postLoginT } from '../api/postLogin';
import { FeedIdLimitUserId, postGetUserFeedsT } from '../api/postGetUserFeeds';

import {
  POST_LOG_IN_API,
  POST_LOG_IN_ERROR,
  POST_LOG_IN_SUCCESS,
  POST_SIGN_UP_API,
  POST_SIGN_UP_ERROR,
  POST_SIGN_UP_SUCCESS,
  POST_BRING_USER_INFO_API,
  POST_BRING_USER_INFO_ERROR,
  POST_BRING_USER_INFO_SUCCESS,
  POST_UPLOAD_FEED_SUCCESS,
  POST_UPLOAD_FEED_API,
  POST_UPLOAD_FEED_ERROR,
  POST_BRING_FEEDS_API,
  POST_BRING_FEEDS_SUCCESS,
  POST_BRING_FEEDS_ERROR,
  PATCH_EDIT_FEED_API,
  PATCH_EDIT_FEED_ERROR,
  PATCH_EDIT_FEED_SUCCESS,
  DELETE_REMOVE_FEED_API,
  DELETE_REMOVE_FEED_SUCCESS,
  DELETE_REMOVE_FEED_ERROR,
  GET_RANK_API,
  GET_RANK_ERROR,
  GET_RANK_SUCCESS,
  POST_LIKE_FEED_API,
  POST_LIKE_FEED_ERROR,
  POST_LIKE_FEED_SUCCESS,
  POST_BRING_COMMENT_API,
  POST_BRING_COMMENT_SUCCESS,
  POST_BRING_COMMENT_ERROR,
} from '../actions/actionTypes';

export const postLogInAsync = createAsyncAction(
  POST_LOG_IN_API,
  POST_LOG_IN_SUCCESS,
  POST_LOG_IN_ERROR
)<undefined, AccessToken, AxiosError>();

export const postSignUpAsync = createAsyncAction(
  POST_SIGN_UP_API,
  POST_SIGN_UP_SUCCESS,
  POST_SIGN_UP_ERROR
)<undefined, SignUp, AxiosError>();

export const postBringCommentAsync = createAsyncAction(
  POST_BRING_COMMENT_API,
  POST_BRING_COMMENT_SUCCESS,
  POST_BRING_COMMENT_ERROR
)<undefined, BringComment, AxiosError>();

export const postBringFeedsAsync = createAsyncAction(
  POST_BRING_FEEDS_API,
  POST_BRING_FEEDS_SUCCESS,
  POST_BRING_FEEDS_ERROR
)<undefined, Welcome, AxiosError>();

export const postUploadFeedsAsync = createAsyncAction(
  POST_UPLOAD_FEED_API,
  POST_UPLOAD_FEED_SUCCESS,
  POST_UPLOAD_FEED_ERROR
)<undefined, UploadFeed, AxiosError>();

export const postBringUserInfoAsync = createAsyncAction(
  POST_BRING_USER_INFO_API,
  POST_BRING_USER_INFO_SUCCESS,
  POST_BRING_USER_INFO_ERROR
)<undefined, UserInfoT, AxiosError>();

export const getRankAsync = createAsyncAction(
  GET_RANK_API,
  GET_RANK_SUCCESS,
  GET_RANK_ERROR
)<undefined, Rank, AxiosError>();

export const postLikeFeedAsync = createAsyncAction(
  POST_LIKE_FEED_API,
  POST_LIKE_FEED_SUCCESS,
  POST_LIKE_FEED_ERROR
)<undefined, FeedLike, AxiosError>();

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

export function postBringFeedsThunk(feed: Feed) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postBringFeedsAsync;
    dispatch(request());
    try {
      const userFeeds = await postBringFeedT(feed);
      dispatch(success(userFeeds));
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

export const getUserInfo = (userInfo: UserInfo) => {
  return {
    type: GET_USER_INFO,
    payload: {
      userInfo,
    },
  };
};

export const getPrivateFeeds = (privateFeeds: PrivateFeed[]) => ({
  type: GET_PRIVATE_FEEDS,
  payload: {
    privateFeeds,
  },
});

export const getRank = (rank: Rank[]) => ({
  type: GET_RANK,
  payload: {
    rank,
  },
});

export const getComments = (comments: Comment[]) => ({
  type: GET_COMMENTS,
  payload: {
    comments,
  },
});

export const getUserFeeds = (userFeeds: UserFeed[]) => ({
  type: GET_USER_FEEDS,
  payload: {
    userFeeds,
  },
});
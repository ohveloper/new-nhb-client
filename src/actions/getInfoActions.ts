export const GET_USER_INFO = 'GET_USER_INFO' as const;
export const GET_PRIVATE_FEEDS = 'GET_PRIVATE_FEEDS' as const;
export const GET_RANK = 'GET_RANK' as const;
export const GET_COMMENTS = 'GET_COMMENTS' as const;
export const GET_USER_FEEDS = 'GET_USER_FEEDS' as const;

import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { postBringUserInfoT, UUID } from '../api/postBringUserInfo';
import { postUserFeedT } from '../api/postUserFeeds';
import { FeedId, postLikeFeedT } from '../api/postLikeFeed';

import { Feed } from '../api/postUserFeeds';
import {
  PrivateFeed,
  UserInfo,
  Rank,
  Comment,
  UserFeed,
} from '../reducers/initialState';
import { getRankT } from '../api/getRank';
import { Welcome } from '../reducers/reducer';
import { UserInfoT } from '../reducers/reducer';
import { FeedLike } from '../api/postLikeFeed';
import { Content, postUploadFeedT, UploadFeed } from '../api/postUploadFeed';

export const GET_USER_INFO_API = 'GET_USER_INFO_API' as const;
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS' as const;
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR' as const;
export const GET_RANK_API = 'GET_RANK_API' as const;
export const GET_RANK_SUCCESS = 'GET_RANK_SUCCES' as const;
export const GET_RANK_ERROR = 'GET_RANK_ERROR' as const;
export const GET_PRIVATE_FEEDS_API = 'GET_PRIVATE_FEEDS_API' as const;
export const GET_PRIVATE_FEEDS_SUCCESS = 'GET_PRIVATE_FEEDS_SUCCES' as const;
export const GET_PRIVATE_FEEDS_ERROR = 'GET_PRIVATE_FEEDS_ERROR' as const;
export const POST_BRING_FEEDS_API = 'POST_BRING_FEEDS_API' as const;
export const POST_BRING_FEEDS_SUCCESS = 'POST_BRING_FEEDS_SUCCESS' as const;
export const POST_BRING_FEEDS_ERROR = 'POST_BRING_FEEDS_ERROR' as const;
export const POST_LIKE_FEED_API = 'POST_LIKE_FEED_API' as const;
export const POST_LIKE_FEED_SUCCESS = 'POST_LIKE_FEED_SUCCESS' as const;
export const POST_LIKE_FEED_ERROR = 'POST_LIKE_FEED_ERROR' as const;
export const POST_UPLOAD_FEED_API = 'POST_UPLOAD_FEED_API' as const;
export const POST_UPLOAD_FEED_SUCCESS = 'POST_UPLOAD_FEED_SUCCESS' as const;
export const POST_UPLOAD_FEED_ERROR = 'POST_UPLOAD_FEED_ERROR' as const;

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
  GET_USER_INFO_API,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_ERROR
)<undefined, UserInfoT, AxiosError>();

export const getPrivateFeedsAsync = createAsyncAction(
  GET_PRIVATE_FEEDS_API,
  GET_PRIVATE_FEEDS_SUCCESS,
  GET_PRIVATE_FEEDS_ERROR
)<undefined, PrivateFeed, AxiosError>();

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

export function postLikeFeedThunk(feedId: FeedId) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postLikeFeedAsync;
    dispatch(request());
    try {
      const likeFeed = await postLikeFeedT(feedId);
      dispatch(success(likeFeed));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
export function postUploadFeedThunk(content: Content) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postUploadFeedsAsync;
    dispatch(request());
    try {
      const uploadFeed = await postUploadFeedT(content);
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
      const userFeeds = await postUserFeedT(feed);
      dispatch(success(userFeeds));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function postBringUserInfoThunk(userId: UUID) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postBringUserInfoAsync;
    dispatch(request());

    try {
      const userInfo = await postBringUserInfoT(userId);
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

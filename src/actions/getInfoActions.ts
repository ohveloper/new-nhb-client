import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { getUserInfoT } from '../api/getUserInfo';
import { getPrivateFeedT } from '../api/getPrivateFeeds';

import {
  PrivateFeed,
  UserInfo,
  Rank,
  Comment,
  UserFeed,
} from '../reducers/initialState';
import { getRankT } from '../api/getRank';

export const GET_USER_INFO_API = 'GET_USER_INFO_API' as const;
export const GET_USER_INFO_SUCCESS_API = 'GET_USER_INFO_SUCCESS_API' as const;
export const GET_USER_INFO_ERROR_API = 'GET_USER_INFO_ERROR_API' as const;

export const GET_PRIVATE_FEEDS_API = 'GET_PRIVATE_FEEDS_API' as const;
export const GET_PRIVATE_FEEDS_SUCCESS = 'GET_PRIVATE_FEEDS_SUCCES' as const;
export const GET_PRIVATE_FEEDS_ERROR = 'GET_PRIVATE_FEEDS_ERROR' as const;

export const GET_RANK_API = 'GET_RANK_API' as const;
export const GET_RANK_SUCCESS = 'GET_RANK_SUCCES' as const;
export const GET_RANK_ERROR = 'GET_RANK_ERROR' as const;

export const GET_USER_INFO = 'GET_USER_INFO' as const;
export const GET_PRIVATE_FEEDS = 'GET_PRIVATE_FEEDS' as const;
export const GET_RANK = 'GET_RANK' as const;
export const GET_COMMENTS = 'GET_COMMENTS' as const;
export const GET_USER_FEEDS = 'GET_USER_FEEDS' as const;

export const getUserInfoAsync = createAsyncAction(
  GET_USER_INFO_API,
  GET_USER_INFO_SUCCESS_API,
  GET_USER_INFO_ERROR_API
)<undefined, UserInfo, AxiosError>();

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

export function getUserInfoThunk(url: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getUserInfoAsync;
    dispatch(request());
    try {
      const userInfo = await getUserInfoT(url);
      dispatch(success(userInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getPrivateFeedsThunk(url: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getPrivateFeedsAsync;
    dispatch(request());
    try {
      const privateFeeds = await getPrivateFeedT(url);
      dispatch(success(privateFeeds));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

export function getRankThunk(url: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getRankAsync;
    dispatch(request());
    try {
      const rank = await getRankT(url);
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

import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { Welcome, UserFeeds } from '../reducers/reducer';
import { Feed, postBringFeedT } from '../api/postBringFeeds';
import { postUploadFeedT, UploadFeed, Content } from '../api/postUploadFeed';

//? ---------------------Action Type-----------------------//
export const POST_CREATE_POEM = 'POST_CREATE_POEM' as const;
export const POST_CREATE_POEM_API = 'POST_CREATE_POEM_API' as const;
export const POST_CREATE_POEM_SUCCESS = 'POST_CREATE_POEM_SUCCESS' as const;
export const POST_CREATE_POEM_ERROR = 'POST_CREATE_POEM_ERROR' as const;

export const GET_USER_FEEDS = 'GET_USER_FEEDS' as const;
export const POST_BRING_FEEDS_API = 'POST_BRING_FEEDS_API' as const;
export const POST_BRING_FEEDS_SUCCESS = 'POST_BRING_FEEDS_SUCCESS' as const;
export const POST_BRING_FEEDS_ERROR = 'POST_BRING_FEEDS_ERROR' as const;

//? ---------------Action Type의 타입 정의-----------------//
export const postCreatePoemAsync = createAsyncAction(
  POST_CREATE_POEM_API,
  POST_CREATE_POEM_SUCCESS,
  POST_CREATE_POEM_ERROR
)<undefined, UploadFeed, AxiosError>();

export const postBringFeedsAsync = createAsyncAction(
  POST_BRING_FEEDS_API,
  POST_BRING_FEEDS_SUCCESS,
  POST_BRING_FEEDS_ERROR
)<undefined, Welcome, AxiosError>();

//? -------------------액션 생성 함수 ----------------------//
export function postCreatePoemThunk(feed: Content) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postCreatePoemAsync;
    dispatch(request());
    try {
      const userFeeds = await postUploadFeedT(feed);
      dispatch(success(userFeeds));
    } catch (err) {
      dispatch(failure(err));
    }
  };
}
export const postCreatePoem = (feed: UserFeeds) => ({
  type: POST_CREATE_POEM,
  payload: {
    feed,
  },
});

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

export const getUserFeeds = (userFeeds: UserFeeds[]) => ({
  type: GET_USER_FEEDS,
  payload: {
    userFeeds,
  },
});

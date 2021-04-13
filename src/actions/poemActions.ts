import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { Feed } from '../reducers/poemReducer';

import { UserFeeds } from '../reducers/poemReducer';
import { postCreatePoemT, Content, UploadMsg } from '../api/postCreatePoem';

//? ---------------------Action Type-----------------------//
export const POST_CREATE_POEM = 'POST_CREATE_POEM' as const;
export const POST_CREATE_POEM_API = 'POST_CREATE_POEM_API' as const;
export const POST_CREATE_POEM_SUCCESS = 'POST_CREATE_POEM_SUCCESS' as const;
export const POST_CREATE_POEM_ERROR = 'POST_CREATE_POEM_ERROR' as const;

//? ---------------Action Type의 타입 정의-----------------//
export const postCreatePoemAsync = createAsyncAction(
  POST_CREATE_POEM_API,
  POST_CREATE_POEM_SUCCESS,
  POST_CREATE_POEM_ERROR
)<undefined, UploadMsg, AxiosError>();

//? -------------------액션 생성 함수 ----------------------//
export function postCreatePoemThunk(feed: Content) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = postCreatePoemAsync;
    dispatch(request());
    try {
      const userFeeds = await postCreatePoemT(feed);
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

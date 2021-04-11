import { createReducer } from 'typesafe-actions';
import { UserInfo } from './initialState';
import { Actions } from '../actions';
import {
  GET_USER_INFO_API,
  GET_USER_INFO_ERROR_API,
  GET_USER_INFO_SUCCESS_API,
} from '../actions/getInfoActions';
export interface UserInfoState {
  userInfo: {
    loading: boolean;
    error: Error | null;
    data: UserInfo | null;
  };
}

const initState: UserInfoState = {
  userInfo: {
    loading: false,
    error: null,
    data: null,
  },
};

const reducer = createReducer<UserInfoState, Actions>(initState, {
  [GET_USER_INFO_API]: (state) => ({
    ...state,
    userInfo: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_USER_INFO_SUCCESS_API]: (state, action) => ({
    ...state,
    userInfo: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_USER_INFO_ERROR_API]: (state, action) => ({
    ...state,
    userInfo: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default reducer;

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

export function reducer(
  state: UserInfoState = initState,
  action: Actions
): UserInfoState {
  switch (action.type) {
    case GET_USER_INFO_API:
      return {
        ...state,
        userInfo: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_USER_INFO_SUCCESS_API:
      return {
        ...state,
        userInfo: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_USER_INFO_ERROR_API:
      return {
        ...state,
        userInfo: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    default:
      return state;

    // [GET_USER_INFO_SUCCESS_API]: (state, action) => ({
    //   ...state,
    //   userInfo: {
    //     loading: false,
    //     error: null,
    //     data: action.payload,
    //   },
    // }),
    // [GET_USER_INFO_ERROR_API]: (state, action) => ({
    //   ...state,
    //   userInfo: {
    //     loading: false,
    //     error: action.payload,
    //     data: null,
    //   },
    // }),
  }
}

export default reducer;

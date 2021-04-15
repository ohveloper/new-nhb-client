import {
  GET_COMMENTS,
  GET_PRIVATE_FEEDS,
  GET_RANK,
  GET_USER_FEEDS,
  GET_USER_INFO,
} from '../actions/actions';
import { initialState } from './initialState';
import { Actions } from '../actions';

export default function reducer(
  state: initialState = initialState,
  action: Actions
): initialState {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo,
      };
    case GET_PRIVATE_FEEDS:
      return {
        ...state,
        privateFeeds: action.payload.privateFeeds,
      };
    case GET_RANK:
      return {
        ...state,
        rank: action.payload.rank,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
      };
    case GET_USER_FEEDS:
      return {
        ...state,
        userFeeds: action.payload.userFeeds,
      };
    default:
      return state;
  }
}

import { Actions } from '../actions';
import {
  GET_USER_INFO_SUCCESS,
  POST_BRING_FEEDS_SUCCESS,
} from '../actions/getInfoActions';
export interface InitState {
  userInfo: {
    data: UserInfo | null;
  };
  userFeeds: {
    data: Welcome | null;
  };
}

export interface UserInfo {
  nickName: string;
  introduction: string;
  tags: Tags[];
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Tags {
  tagId: number;
  tagName: string;
  description: string;
  isUsed: boolean;
}

export interface Welcome {
  userFeeds: UserFeeds[];
}

export interface UserFeeds {
  feedId: string;
  user: User;
  topic: string;
  content: string;
  likes: string;
  comments: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  userId: string;
  nickName: string;
  tag: string;
}

const initState: InitState = {
  userInfo: {
    data: null,
  },
  userFeeds: {
    data: null,
  },
};

export function reducer(
  state: InitState = initState,
  action: Actions
): InitState {
  switch (action.type) {
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          data: action.payload,
        },
      };

    case POST_BRING_FEEDS_SUCCESS:
      return {
        ...state,
        userFeeds: {
          data: action.payload,
        },
      };

    default:
      return state;
  }
}

export default reducer;

import { PoemActions } from '../actions';
import { POST_CREATE_POEM_SUCCESS } from '../actions/poemActions';
import { UploadFeed } from '../api/postUploadFeed';

export interface poemInitState {
  userFeeds: {
    data: UploadFeed | null;
  };
  todaysTopic: string[];
}
export interface UserFeeds {
  feedId: number;
  user: User;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export interface Welcome {
  userFeeds: UserFeeds[];
}

export interface User {
  userId: string;
  nickName: string;
  tag: string;
}

const poemInitState: poemInitState = {
  userFeeds: {
    data: null,
  },
  todaysTopic: ['시', '장'],
};

export function poemReducer(
  state: poemInitState = poemInitState,
  action: PoemActions
): poemInitState {
  switch (action.type) {
    case POST_CREATE_POEM_SUCCESS:
      return {
        ...state,
        userFeeds: {
          data: action.payload,
        },
      };
    default:
      return state;
      break;
  }
}

export default poemReducer;

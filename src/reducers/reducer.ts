import { Actions } from '../actions/index';
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
  GET_TOPICS_API,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
} from '../actions/actionTypes';
export interface InitState {
  userInfo: {
    loading: boolean;
    error: Error | null;
    data: UserInfoT | null;
  };
  userFeeds: {
    loading: boolean;
    error: Error | null;
    data: Welcome | null;
  };
  likeFeed: {
    loading: boolean;
    error: Error | null;
    data: LikeFeed | null;
  };
  rank: {
    loading: boolean;
    error: Error | null;
    data: Rank | null;
  };
  uploadFeed: {
    loading: boolean;
    error: Error | null;
    data: UploadFeed | null;
  };
  comments: {
    loading: boolean;
    error: Error | null;
    data: BringComment | null;
  };
  accessToken: string | null;
  signup: {
    loading: boolean;
    error: Error | null;
    data: SignUp | null;
  };
  login: {
    loading: boolean;
    error: Error | null;
    data: AccessToken | null;
  };
  privateFeeds: {
    loading: boolean;
    error: Error | null;
    data: PrivateFeedT | null;
  };
  topics: {
    loading: boolean;
    error: Error | null;
    data: Topics | null;
  };
  openPanel: boolean;
}

export interface Topics {
  id: number;
  word: string;
  expiration: string;
}

export interface UploadFeed {
  message: string;
}

export interface PrivateFeedT {
  feedId: number;
  user: PrivateFeedUserT;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export interface PrivateFeedUserT {
  userId: number;
  nickName: string;
  tag: string;
}

export interface AccessToken {
  accessToken: string;
}

export interface SignUp {
  accessToken: string;
  email: string;
  nickName: string;
}

export interface BringComment {
  comments: Comment[];
}

export interface Comment {
  user: User;
  commentId: string;
  comment: string;
  commentLike: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  nickName: string;
  userId: string;
}

export interface Rank {
  userId: number;
  nickName: string;
  like: number;
  tag: string;
}

export interface LikeFeed {
  message: string;
}
export interface UserInfoT {
  userId: number;
  nickName: string;
  introduction: string;
  tags: Tags[];
  avatarUrl: string;
  userLikeNum: number;
  myActivity: MyActivity;
  createdAt: string;
  updatedAt: string;
}

export interface MyActivity {
  likedFeed: number[];
  commentFeed: number[];
  likeCommnet: number[];
}

export interface Tags {
  tagId: number;
  tagName: string;
  description: string;
  isUsed: number;
}

export interface Welcome {
  userFeeds: UserFeeds[];
}

export interface UserFeeds {
  feedId: string;
  user: User;
  topic: string;
  content: string[];
  likeNum: string;
  commentNum: number;
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
    loading: false,
    error: null,
    data: null,
  },
  userFeeds: {
    loading: false,
    error: null,
    data: null,
  },
  likeFeed: {
    loading: false,
    error: null,
    data: null,
  },
  rank: {
    loading: false,
    error: null,
    data: null,
  },
  uploadFeed: {
    loading: false,
    error: null,
    data: null,
  },
  comments: {
    loading: false,
    error: null,
    data: null,
  },
  accessToken: null,
  signup: {
    loading: false,
    error: null,
    data: null,
  },
  login: {
    loading: false,
    error: null,
    data: null,
  },
  privateFeeds: {
    loading: false,
    error: null,
    data: null,
  },
  topics: {
    loading: false,
    error: null,
    data: null,
  },
  openPanel: false,
};

export function reducer(
  state: InitState = initState,
  action: Actions
): InitState {
  switch (action.type) {
    case POST_BRING_USER_INFO_API:
      return {
        ...state,
        userInfo: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_BRING_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case POST_BRING_USER_INFO_ERROR:
      return {
        ...state,
        userInfo: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case POST_BRING_FEEDS_API:
      return {
        ...state,
        userFeeds: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_BRING_FEEDS_SUCCESS:
      return {
        ...state,
        userFeeds: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case POST_BRING_FEEDS_ERROR:
      return {
        ...state,
        userFeeds: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case GET_RANK_API:
      return {
        ...state,
        rank: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_RANK_SUCCESS:
      return {
        ...state,
        rank: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_RANK_ERROR:
      return {
        ...state,
        userFeeds: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case POST_LIKE_FEED_API:
      return {
        ...state,
        likeFeed: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_LIKE_FEED_SUCCESS:
      return {
        ...state,
        likeFeed: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case POST_LIKE_FEED_ERROR:
      return {
        ...state,
        likeFeed: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case POST_UPLOAD_FEED_API:
      return {
        ...state,
        uploadFeed: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_UPLOAD_FEED_SUCCESS:
      return {
        ...state,
        uploadFeed: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case POST_UPLOAD_FEED_ERROR:
      return {
        ...state,
        uploadFeed: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case POST_BRING_COMMENT_API:
      return {
        ...state,
        comments: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_BRING_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case POST_BRING_COMMENT_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case POST_SIGN_UP_API:
      return {
        ...state,
        signup: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_SIGN_UP_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.data.accessToken,
        signup: {
          loading: false,
          error: null,
          data: action.payload.data,
        },
      };
    case POST_SIGN_UP_ERROR:
      return {
        ...state,
        comments: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case POST_LOG_IN_API:
      return {
        ...state,
        login: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_LOG_IN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.data.accessToken,
        login: {
          loading: false,
          error: null,
          data: action.payload.data,
        },
      };
    case POST_LOG_IN_ERROR:
      return {
        ...state,
        login: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case GET_TOPICS_API:
      return {
        ...state,
        topics: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_TOPICS_SUCCESS:
      return {
        ...state,
        topics: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_TOPICS_ERROR:
      return {
        ...state,
        topics: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    default:
      return state;
  }
}

export default reducer;

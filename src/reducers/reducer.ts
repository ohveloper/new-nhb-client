import { Actions } from '../actions';
import {
  GET_RANK_API,
  GET_RANK_ERROR,
  GET_RANK_SUCCESS,
  GET_USER_INFO_API,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
  POST_BRING_COMMENT_API,
  POST_BRING_COMMENT_ERROR,
  POST_BRING_COMMENT_SUCCESS,
  POST_BRING_FEEDS_API,
  POST_BRING_FEEDS_ERROR,
  POST_BRING_FEEDS_SUCCESS,
  POST_LIKE_FEED_API,
  POST_LIKE_FEED_ERROR,
  POST_LIKE_FEED_SUCCESS,
  POST_UPLOAD_FEED_API,
  POST_UPLOAD_FEED_ERROR,
  POST_UPLOAD_FEED_SUCCESS,
} from '../actions/getInfoActions';
import { UploadFeed } from '../api/postUploadFeed';
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
};

export function reducer(
  state: InitState = initState,
  action: Actions
): InitState {
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
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_USER_INFO_ERROR:
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

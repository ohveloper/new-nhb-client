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
  POST_GET_PRIVATEFEEDS_API,
  POST_GET_PRIVATEFEEDS_SUCCESS,
  POST_GET_PRIVATEFEEDS_ERROR,
  GET_ALL_TAGS_ERROR,
  GET_ALL_TAGS_SUCCESS,
  GET_ALL_TAGS_API,
  POST_GET_USER_APT_INFO_API,
  POST_GET_USER_APT_INFO_SUCCESS,
  POST_GET_USER_APT_INFO_ERROR,
  GET_ALL_TOPICS_ADMIN_API,
  GET_ALL_TOPICS_ADMIN_SUCCESS,
  GET_ALL_TOPICS_ADMIN_ERROR,
  GET_ALL_TAGS_ADMIN_API,
  GET_ALL_TAGS_ADMIN_SUCCESS,
  GET_ALL_TAGS_ADMIN_ERROR,
  GET_OAUTH_API,
  GET_OAUTH_SUCCESS,
  GET_OAUTH_ERROR,
  GET_LOG_OUT_API,
  GET_LOG_OUT_ERROR,
  GET_LOG_OUT_SUCCESS,
  GET_OAUTH_ISSUE_ACCESS_TOKEN_API,
  GET_ISSUE_ACCESS_TOKEN_API,
  GET_ISSUE_ACCESS_TOKEN_SUCCESS,
  GET_ISSUE_ACCESS_TOKEN_ERROR,
  FAKE_GUSET_API,
  FAKE_GUSET_SUCCESS,
  FAKE_GUSET_ERROR,
} from '../actions/actionTypes';
export interface InitState {
  userInfo: {
    loading: boolean;
    error: Error | null;
    data: UserInfo | null;
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
    data: Data | null;
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
    data: PrivateFeeds | null;
  };
  topics: {
    loading: boolean;
    error: Error | null;
    data: Topics | null;
  };
  tags: {
    loading: boolean;
    error: Error | null;
    data: AllTags | null;
  };
  apartment: {
    loading: boolean;
    error: Error | null;
    data: Apt | null;
  };
  topicsAdmin: {
    loading: boolean;
    error: Error | null;
    data: TopicsAdmin | null;
  };
  adminTags: {
    loading: boolean;
    error: Error | null;
    data: AdminTags | null;
  };
}
const fakedata: InitState = {
  userInfo: {
    loading: false,
    error: null,
    data: {
      data: {
        userInfo: {
          userId: 999,
          avatarUrl: '',
          nickName: 'Guest',
          introduction: 'TeamBBBA',
          tags: [],
          userLikeNum: 0,
          createdAt: '2021-04-25T22:21:48.000Z',
          updatedAt: '2021-04-25T22:23:06.000Z',
        },
      },
    },
  },
  userFeeds: {
    loading: false,
    error: {
      message: 'Network Error',
      name: 'Error',
      stack:
        'Error: Network Error\n    at e.exports (https://nhbomb.tk/static/js/2.a6d6453b.chunk.js:2:116296)\n    at XMLHttpRequest.p.onerror (https://nhbomb.tk/static/js/2.a6d6453b.chunk.js:2:115266)',
    },
    data: null,
  },
  likeFeed: { loading: false, error: null, data: null },
  rank: {
    loading: false,
    error: null,
    data: {
      data: {
        rank: [
          { userId: 6, nickName: 'NBH TEST!', like: 1, tag: '' },
          { userId: 6, nickName: 'By TeamBBBA!', like: 1, tag: '' },
        ],
      },
    },
  },
  uploadFeed: { loading: false, error: null, data: null },
  comments: { loading: false, error: null, data: null },
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE5MzgwNDE2LCJleHAiOjE2MTkzOTg0MTZ9.csKMh2_2GalH_8k62WpYZbyqm1gU6UMgYRQ_6NVMDtw',
  signup: { loading: false, error: null, data: null },
  login: {
    loading: false,
    error: null,
    data: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE5MzgwNDE2LCJleHAiOjE2MTkzOTg0MTZ9.csKMh2_2GalH_8k62WpYZbyqm1gU6UMgYRQ_6NVMDtw',
    },
  },
  privateFeeds: {
    loading: false,
    error: null,
    data: {
      data: {
        userFeeds: [
          {
            feedId: 17,
            user: { userId: 7, nickName: 'Qukka', tag: 1 },
            topic: '여행',
            content: ['여기서 먹고 저기서 먹고', '행복하니까 됐어 @Choi_dol'],
            likeNum: 0,
            commentNum: 0,
            createdAt: '2021-04-25T22:25:29.000Z',
            updatedAt: '2021-04-25T22:25:29.000Z',
          },
        ],
      },
    },
  },
  topics: {
    loading: false,
    error: null,
    data: {
      data: {
        topics: [
          { id: 1, word: '여행', expiration: '2021-04-26T00:00:00.000Z' },
        ],
      },
    },
  },
  tags: {
    loading: false,
    error: null,
    data: {
      data: {
        tags: [
          {
            id: 1,
            tagName: '어서오시오',
            description: '가입 축하 뱃지',
            tagUrl: 'null',
          },
          {
            id: 2,
            tagName: '대박사건',
            description: '별 100개를 받음',
            tagUrl: 'null',
          },
          {
            id: 3,
            tagName: '1등',
            description: '별 랭킹 1위 뱃지',
            tagUrl: 'null',
          },
          {
            id: 4,
            tagName: '2등',
            description: '별 랭킹 2위 뱃지',
            tagUrl: 'null',
          },
          {
            id: 5,
            tagName: '3등',
            description: '별 랭킹 3위 뱃지',
            tagUrl: 'null',
          },
          {
            id: 6,
            tagName: '노잼',
            description: '재미없음....',
            tagUrl: 'null',
          },
          {
            id: 7,
            tagName: 'TMI',
            description: 'TMITMITMITMITMITMI',
            tagUrl: 'null',
          },
        ],
      },
    },
  },
  apartment: {
    loading: false,
    error: null,
    data: {
      data: {
        apartment: [[{ date: '2020-05-03', feedNum: null }]],
      },
    },
  },
  topicsAdmin: { loading: false, error: null, data: null },
  adminTags: { loading: false, error: null, data: null },
};

export interface AdminTags {
  data: {
    tags: AdminTagss[];
  };
}

export interface AdminTagss {
  id: number;
  tagName: string;
  description: string;
  tagUrl: string | null;
}

export interface TopicsAdmin {
  data: {
    topics: AdminTocis[];
  };
}
export interface AdminTocis {
  id: number;
  word: string;
  expiration: string;
}

export interface Apt {
  data: {
    apartment: [Apart[]];
  };
}

export interface Apart {
  date: string;
  feedNum: null | number;
}

export interface AllTags {
  data: {
    tags: AllTag[];
  };
}
export interface AllTag {
  id: number;
  tagName: string;
  description: string;
  tagUrl: string | null;
}

export interface Topics {
  data: {
    topics: Topic[];
  };
}
export interface Topic {
  id: number;
  word: string;
  expiration: string;
}

export interface UploadFeed {
  message: string;
}

export interface PrivateFeeds {
  data: {
    userFeeds: PrivateFeedT[];
  };
}
export interface PrivateFeedT {
  feedId: number;
  user: PrivateFeedUserT;
  topic: string;
  content: string[];
  likeNum: number;
  commentNum: number;
  createdAt: string;
  updatedAt: string;
}

export interface PrivateFeedUserT {
  userId: number;
  nickName: string;
  tag: number;
}

export interface AccessToken {
  accessToken: string;
  isAdmin?: boolean;
}

export interface SignUp {
  accessToken: string;
  email: string;
  nickName: string;
}

export interface BringComment {
  data: { comments: Comment[] };
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

export interface Data {
  data: { rank: Rank[] };
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

export interface UserInfo {
  data: {
    userInfo: UserInfoT;
  };
}

export interface UserInfoT {
  userId: number;
  nickName: string;
  introduction: string;
  tags: Tags[];
  avatarUrl: string;
  userLikeNum: number;
  createdAt: string;
  updatedAt: string;
}

export interface Tags {
  tagId: number;
  tagName: string;
  description: string;
  isUsed: number;
}

export interface Welcome {
  data: {
    userFeeds: UserFeeds[];
  };
}

export interface UserFeeds {
  feedId: number;
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
  tags: {
    loading: false,
    error: null,
    data: null,
  },
  apartment: {
    loading: false,
    error: null,
    data: null,
  },
  topicsAdmin: {
    loading: false,
    error: null,
    data: null,
  },
  adminTags: {
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
    case GET_LOG_OUT_API:
      return {
        ...state,
      };
    case GET_LOG_OUT_SUCCESS:
      return {
        ...state,
        ...initState,
        ...state.rank,
      };
    case GET_LOG_OUT_ERROR:
      return {
        ...state,
      };
    case GET_OAUTH_API:
      return {
        ...state,
        login: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_OAUTH_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.data.accessToken,
        login: {
          loading: false,
          error: null,
          data: action.payload.data,
        },
      };
    case GET_OAUTH_ERROR:
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
    case GET_ALL_TAGS_API:
      return {
        ...state,
        tags: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_ALL_TAGS_SUCCESS:
      return {
        ...state,
        tags: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_ALL_TAGS_ERROR:
      return {
        ...state,
        tags: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case POST_GET_PRIVATEFEEDS_API:
      return {
        ...state,
        privateFeeds: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_GET_PRIVATEFEEDS_SUCCESS:
      return {
        ...state,
        privateFeeds: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case POST_GET_PRIVATEFEEDS_ERROR:
      return {
        ...state,
        privateFeeds: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case GET_ALL_TOPICS_ADMIN_API:
      return {
        ...state,
        topicsAdmin: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_ALL_TOPICS_ADMIN_SUCCESS:
      return {
        ...state,
        topicsAdmin: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_ALL_TOPICS_ADMIN_ERROR:
      return {
        ...state,
        topicsAdmin: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case POST_GET_USER_APT_INFO_API:
      return {
        ...state,
        apartment: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case POST_GET_USER_APT_INFO_SUCCESS:
      return {
        ...state,
        apartment: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case POST_GET_USER_APT_INFO_ERROR:
      return {
        ...state,
        apartment: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case GET_ALL_TAGS_ADMIN_API:
      return {
        ...state,
        adminTags: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case GET_ALL_TAGS_ADMIN_SUCCESS:
      return {
        ...state,
        adminTags: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case GET_ALL_TAGS_ADMIN_ERROR:
      return {
        ...state,
        adminTags: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case FAKE_GUSET_API:
      return {
        ...state,
        login: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case FAKE_GUSET_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.data.accessToken,
        login: {
          loading: false,
          error: null,
          data: action.payload.data,
        },
      };
    case FAKE_GUSET_ERROR:
      return {
        ...state,
        login: {
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case GET_ISSUE_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.data.accessToken,
      };

    default:
      return state;
  }
}

export default reducer;

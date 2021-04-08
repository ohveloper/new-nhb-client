const GET_USER_INFO = 'getInfo/GET_USER_INFO' as const;
const GET_PRIVATE_FEEDS = 'getInfo/GET_PRIVATE_FEEDS' as const;
const GET_RANK = 'getInfo/GET_RANK' as const;
const GET_COMMENTS = 'getInfo/GET_COMMENTS' as const;
const GET_USER_FEEDS = 'getInfo/GET_USER_FEEDS' as const;

export const getUserInfo = (userInfo: UserInfo) => ({
  type: GET_USER_INFO,
  payload: {
    userInfo,
  },
});

export const getPrivateFeeds = (privateFeeds: PrivateFeed) => ({
  type: GET_PRIVATE_FEEDS,
  payload: {
    privateFeeds,
  },
});
export const getRank = (rank: Rank[]) => ({
  type: GET_RANK,
  payload: {
    rank,
  },
});
export const getComments = (comments: Comment[]) => ({
  type: GET_COMMENTS,
  payload: {
    comments,
  },
});
export const getUserFeeds = (userFeeds: { [key: string]: UserFeed }) => ({
  type: GET_USER_FEEDS,
  payload: {
    userFeeds,
  },
});

export interface Welcome {
  userInfo: UserInfo;
  privateFeeds: { [key: number]: PrivateFeed };
  rank: Rank[];
  comments: Comment[];
  userFeeds: { [key: number]: UserFeed };
}

export interface Comment {
  user: CommentUser;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentUser {
  nickName: string;
}

export interface PrivateFeed {
  user: PrivateFeedUser;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export interface PrivateFeedUser {
  nickName: string;
  tag: string;
}

export interface Rank {
  nickName: string;
  like: number;
  tag: string;
}

export interface UserFeed {
  user: PrivateFeedUser;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export interface UserInfo {
  nickName: string;
  introduction: string;
  tags: Tags;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Tags {
  hund: Hund;
  pig: Hund;
  newbie: Hund;
}

export interface Hund {
  description: string;
  isUsed: boolean;
}

const initialState: Welcome = {
  userInfo: {
    nickName: '불광동핵주먹',
    introduction: '원펀치 쓰리강냉이',
    tags: {
      hund: { description: '100일연속 글쓰기', isUsed: true },
      pig: { description: '별 많이받음', isUsed: false },
      newbie: { description: '글 처음씀', isUsed: false },
    },
    avatarUrl: 'url',
    createdAt: 'date',
    updatedAt: 'date',
  },
  privateFeeds: {
    1: {
      user: { nickName: '진라면은순한맛', tag: 'tagName' },
      topic: '주말',
      content: ['주린배를 부여잡고', '말고기'],
      likes: 23,
      comments: 43,
      createdAt: 'date',
      updatedAt: 'date',
    },
    2: {
      user: { nickName: '아닌데매운맛인데', tag: 'tagName' },
      topic: '주말',
      content: ['주단태가 말했습니다', '말고기'],
      likes: 22,
      comments: 1,
      createdAt: 'date',
      updatedAt: 'date',
    },
  },
  rank: [
    { nickName: '주님또한명갑니다', like: 12, tag: 'tag' },
    { nickName: 'tester2', like: 23, tag: 'tag' },
    { nickName: 'tester1', like: 123, tag: 'tag' },
    { nickName: '굴진짬뽕', like: 222, tag: 'tag' },
    { nickName: '크림진짬뽕', like: 3212, tag: 'tag' },
  ],
  comments: [
    {
      user: { nickName: '굴진짬뽕' },
      comment: '오오 크림진짬뽕',
      createdAt: 'date',
      updatedAt: 'date',
    },
    {
      user: { nickName: '주님또한명갑니다' },
      comment: '안녕하세요',
      createdAt: 'date',
      updatedAt: 'date',
    },
    {
      user: { nickName: '굴진짬뽕' },
      comment: '대박대박',
      createdAt: 'date',
      updatedAt: 'date',
    },
  ],
  userFeeds: {
    3: {
      user: { nickName: '이렇게하는거맞아요?', tag: 'newbie' },
      topic: '시장',
      content: ['시장에 갔습니다', '장군'],
      likes: 234,
      comments: 32,
      createdAt: 'date',
      updatedAt: 'date',
    },
    4: {
      user: { nickName: '타입스크립트', tag: 'newbie' },
      topic: '시장',
      content: ['시장에 갔습니다', '장발장'],
      likes: 32,
      comments: 354,
      createdAt: 'date',
      updatedAt: 'date',
    },
  },
};

type ReducerAction =
  | ReturnType<typeof getUserInfo>
  | ReturnType<typeof getPrivateFeeds>
  | ReturnType<typeof getRank>
  | ReturnType<typeof getComments>
  | ReturnType<typeof getUserFeeds>;

function getInfo(state: Welcome = initialState, action: ReducerAction) {
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

export default getInfo;

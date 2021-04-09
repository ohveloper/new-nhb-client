const GET_USER_INFO = 'myPage/GET_USER_INFO' as const;
const GET_PRIVATE_FEEDS = 'myPage/GET_PRIVATE_FEEDS' as const;
const GET_RANK = 'myPage/GET_RANK' as const;
const GET_COMMENTS = 'myPage/GET_COMMENTS' as const;
const GET_USER_FEEDS = 'myPage/GET_USER_FEEDS' as const;

// ? 액션 생성 함수--------------------------
export const myPageActions = {
  getUserInfo: (userInfo: UserInfo) => ({
    type: GET_USER_INFO,
    payload: {
      userInfo,
    },
  }),
  getPrivateFeeds: (privateFeeds: PrivateFeed[]) => ({
    type: GET_PRIVATE_FEEDS,
    payload: {
      privateFeeds,
    },
  }),
  getRank: (rank: Rank[]) => ({
    type: GET_RANK,
    payload: {
      rank,
    },
  }),
  getComments: (comments: Comment[]) => ({
    type: GET_COMMENTS,
    payload: {
      comments,
    },
  }),
  getUserFeeds: (userFeeds: UserFeed[]) => ({
    type: GET_USER_FEEDS,
    payload: {
      userFeeds,
    },
  }),
};

//? 액션 객체 타입----------------------------
type GetUserInfo = ReturnType<typeof myPageActions.getUserInfo>;
type GetPrivateFeeds = ReturnType<typeof myPageActions.getPrivateFeeds>;
type GetRank = ReturnType<typeof myPageActions.getRank>;
type GetComments = ReturnType<typeof myPageActions.getComments>;
type GetUserFeeds = ReturnType<typeof myPageActions.getUserFeeds>;

type Action =
  | GetUserInfo
  | GetPrivateFeeds
  | GetRank
  | GetComments
  | GetUserFeeds;

//? myPage 리듀서 값 타입---------------------------
export type Welcome = Readonly<{
  userInfo: UserInfo;
  privateFeeds: PrivateFeed[];
  rank: Rank[];
  comments: Comment[];
  userFeeds: UserFeed[];
}>;

export type Comment = Readonly<{
  user: CommentUser;
  comment: string;
  createdAt: string;
  updatedAt: string;
}>;

export type CommentUser = Readonly<{
  nickName: string;
}>;

export type PrivateFeed = Readonly<{
  feedId: number;
  user: PrivateFeedUser;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}>;

export type PrivateFeedUser = Readonly<{
  nickName: string;
  tag: string;
}>;

export type Rank = Readonly<{
  userId: number;
  nickName: string;
  like: number;
  tag: string;
}>;

export type UserFeed = Readonly<{
  feedId: number;
  user: PrivateFeedUser;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}>;

export type UserInfo = Readonly<{
  nickName: string;
  introduction: string;
  tags: { [key: string]: Hund };
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}>;

export type Tags = Readonly<{
  hund: Hund;
  pig: Hund;
  newbie: Hund;
}>;

export type Hund = Readonly<{
  description: string;
  isUsed: boolean;
}>;

const initialState: Welcome = {
  userInfo: {
    nickName: '불광동핵주먹',
    introduction: '원펀치 쓰리강냉이',
    tags: {
      hund: { description: '100일연속 글쓰기', isUsed: true },
      king: { description: '별 많이받음', isUsed: false },
      newbie: { description: '글 처음씀', isUsed: false },
    },
    avatarUrl: 'url',
    createdAt: 'date',
    updatedAt: 'date',
  },
  privateFeeds: [
    {
      feedId: 1,
      user: { nickName: '진라면은순한맛', tag: 'tagName' },
      topic: '주말',
      content: ['주린배를 부여잡고', '말고기'],
      likes: 23,
      comments: 43,
      createdAt: 'date',
      updatedAt: 'date',
    },
    {
      feedId: 2,
      user: { nickName: '아닌데매운맛인데', tag: 'tagName' },
      topic: '주말',
      content: ['주단태가 말했습니다', '말고기'],
      likes: 22,
      comments: 1,
      createdAt: 'date',
      updatedAt: 'date',
    },
  ],
  rank: [
    { userId: 1, nickName: '주님또한명갑니다', like: 12, tag: 'tag' },
    { userId: 2, nickName: 'tester2', like: 23, tag: 'tag' },
    { userId: 3, nickName: 'tester1', like: 123, tag: 'tag' },
    { userId: 4, nickName: '굴진짬뽕', like: 222, tag: 'tag' },
    { userId: 5, nickName: '크림진짬뽕', like: 3212, tag: 'tag' },
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
  userFeeds: [
    {
      feedId: 3,
      user: { nickName: '이렇게하는거맞아요?', tag: 'newbie' },
      topic: '시장',
      content: ['시장에 갔습니다', '장군'],
      likes: 234,
      comments: 32,
      createdAt: 'date',
      updatedAt: 'date',
    },
    {
      feedId: 4,
      user: { nickName: '타입스크립트', tag: 'newbie' },
      topic: '시장',
      content: ['시장에 갔습니다', '장발장'],
      likes: 32,
      comments: 354,
      createdAt: 'date',
      updatedAt: 'date',
    },
  ],
};

export default function reducer(
  state: Welcome = initialState,
  action: Action
): Welcome {
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

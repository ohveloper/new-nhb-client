export interface initialState {
  userInfo: UserInfo;
  privateFeeds: PrivateFeed[];
  rank: Rank[];
  comments: Comment[];
  userFeeds: UserFeed[];
  newFeed: newFeed;
  todaysTopic: string[];
  badges: Badges[];
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
  feedId: number;
  user: PrivateFeedUser;
  topic: string;
  content: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export interface PrivateFeedUser {
  userId: number;
  nickName: string;
  tag: string;
}

export interface Rank {
  userId: number;
  nickName: string;
  like: number;
  tag: string;
}

export interface UserFeed {
  feedId: number;
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
  isUsed: boolean;
}

export interface newFeed {
  content: string[];
}

export interface Badges {
  tagId: number;
  tagName: string;
  description: string;
  url: string;
}

export const initialState = {
  userInfo: {
    nickName: '불광동핵주먹',
    introduction: '원펀치 쓰리강냉이',
    tags: [
      {
        tagId: 1,
        tagName: 'hund',
        description: '100일연속 글쓰기',
        isUsed: true,
      },
      { tagId: 2, tagName: 'king', description: '별 많이받음', isUsed: false },
      { tagId: 3, tagName: 'newbie', description: '글 처음씀', isUsed: false },
    ],
    userLikeNum: 233,
    avatarUrl: 'url',
    createdAt: 'date',
    updatedAt: 'date',
  },
  privateFeeds: [
    {
      feedId: 1,
      user: { userId: 1, nickName: '진라면은순한맛', tag: 'tagName' },
      topic: '주말',
      content: ['주린배를 부여잡고', '말고기'],
      likes: 23,
      comments: 43,
      createdAt: 'date',
      updatedAt: 'date',
    },
    {
      feedId: 2,
      user: { userId: 1, nickName: '진라면은순한맛', tag: 'tagName' },
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
      user: { userId: 2, nickName: '이렇게하는거맞아요?', tag: 'newbie' },
      topic: '시장',
      content: ['시장에 갔습니다', '장군'],
      likes: 234,
      comments: 32,
      createdAt: 'date',
      updatedAt: 'date',
    },
    {
      feedId: 4,
      user: { userId: 3, nickName: '타입스크립트', tag: 'newbie' },
      topic: '시장',
      content: ['시장에 갔습니다', '장발장'],
      likes: 32,
      comments: 354,
      createdAt: 'date',
      updatedAt: 'date',
    },
  ],
  newFeed: {
    content: [],
  },
  todaysTopic: ['시', '장'],
  badges: [
    { tagId: 1, tagName: 'hund', description: '100일연속 글쓰기', url: 'url' },
    { tagId: 2, tagName: 'king', description: '별 많이받음', url: 'url' },
    { tagId: 3, tagName: 'newbie', description: '글 처음씀', url: 'url' },
    { tagId: 4, tagName: 'everyday', description: '매일 글씀', url: 'url' },
  ],
};

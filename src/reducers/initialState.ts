export const initialState = {
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
      topic: 'keyword',
      content: 'content',
      likes: 23,
      comments: 43,
      createdAt: 'date',
      updatedAt: 'date',
    },
    2: {
      user: { nickName: '아닌데매운맛인데', tag: 'tagName' },
      topic: 'keyword',
      content: 'content',
      likes: 22,
      comments: 1,
      createdAt: 'date',
      updatedAt: 'date',
    },
  },
  rank: [
    { nickName: 'tester1', like: 123, tag: 'tag' },
    { nickName: 'tester2', like: 23, tag: 'tag' },
    { nickName: '크림진짬뽕', like: 3212, tag: 'tag' },
    { nickName: '굴진짬뽕', like: 123, tag: 'tag' },
    { nickName: '주님또한명갑니다', like: 123, tag: 'tag' },
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
  },
};

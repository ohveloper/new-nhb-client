import {
  PrivateFeed,
  UserInfo,
  Rank,
  Comment,
  UserFeed,
} from '../reducers/initialState';

export const GET_USER_INFO = 'getInfo/GET_USER_INFO' as const;
export const GET_PRIVATE_FEEDS = 'getInfo/GET_PRIVATE_FEEDS' as const;
export const GET_RANK = 'getInfo/GET_RANK' as const;
export const GET_COMMENTS = 'getInfo/GET_COMMENTS' as const;
export const GET_USER_FEEDS = 'getInfo/GET_USER_FEEDS' as const;

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

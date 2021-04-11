import axios, { AxiosError } from 'axios';

import {
  PrivateFeed,
  UserInfo,
  Rank,
  Comment,
  UserFeed,
} from '../reducers/initialState';

export const GET_USER_INFO = 'GET_USER_INFO' as const;
export const GET_PRIVATE_FEEDS = 'GET_PRIVATE_FEEDS' as const;
export const GET_RANK = 'GET_RANK' as const;
export const GET_COMMENTS = 'GET_COMMENTS' as const;
export const GET_USER_FEEDS = 'GET_USER_FEEDS' as const;

// const apiClient = axios.create({
//   baseURL: 'https://localhost:4000',
//   responseType: 'json',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export const getUserInfo = async () => {
//   try {
//     const response = await apiClient.get<UserInfo>('/user');
//     const userInfo = response.data;

//     return {
//       type: GET_USER_INFO,
//       payload: {
//         userInfo,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getUserInfo = (userInfo: UserInfo) => {
  return {
    type: GET_USER_INFO,
    payload: {
      userInfo,
    },
  };
};

export const getPrivateFeeds = (privateFeeds: PrivateFeed[]) => ({
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

export const getUserFeeds = (userFeeds: UserFeed[]) => ({
  type: GET_USER_FEEDS,
  payload: {
    userFeeds,
  },
});

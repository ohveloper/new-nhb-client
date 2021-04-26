import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface FeedLike {
  message: string;
}

export interface LikeFeedId {
  feedId: number;
}

export async function postLikeFeedT(feedId: LikeFeedId, accessToken: string) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  const response = await apiClient.post<FeedLike>('/feed/like', { feedId });
  return response.data;
}

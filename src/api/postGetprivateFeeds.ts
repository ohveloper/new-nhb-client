import axios from 'axios';
import dotenv from 'dotenv';
import { PrivateFeeds } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';
const accessToken = process.env.AccessToken || 'hello';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${accessToken}`,
  },
  withCredentials: true,
});

export interface UserId {
  topicId: number;
  userId: number;
  isMaxLike?: boolean | null;
  limit: number;
  feedId?: number | null;
}

export async function postGetPrivateFeedsT(userId: UserId) {
  const response = await apiClient.post<PrivateFeeds>('/feed/lookup', userId);
  return response.data;
}

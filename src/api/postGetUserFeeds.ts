import axios from 'axios';
import dotenv from 'dotenv';
import { PrivateFeedT } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';
const accessToken = process.env.AccessToken || 'hello';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'withCredentials': true,
    'authorization': `Bearer ${accessToken}`,
  },
});

export interface FeedIdLimitUserId {
  feedId?: number | null;
  limit?: number | null;
  userId?: number | null;
}

export async function postGetUserFeedsT(userId: FeedIdLimitUserId) {
  const response = await apiClient.post<PrivateFeedT>('/user', userId);
  return response.data;
}

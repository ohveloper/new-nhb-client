import axios from 'axios';
import { Welcome } from '../reducers/reducer';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export interface Feed {
  topicId: number;
  limit: number;
  feedId?: number | null;
  userId?: number;
  isMakLike?: boolean;
}

export async function postBringFeedT(feed: Feed) {
  const response = await apiClient.post<Welcome>('/feed/lookup', feed);
  return response.data;
}

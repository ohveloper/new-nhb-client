import axios from 'axios';
import dotenv from 'dotenv';
import { BringComment } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjE4MzAxOTQ4LCJleHAiOjE2MTgzMTk5NDh9.d2nvQj3sVCfDv-2P8P78IMdOui6XA0JMB4kO-o271oA',
  },
});

export interface FeedId {
  feedId: number;
}

export async function postBringCommentT(feedId: FeedId) {
  const response = await apiClient.post<BringComment>(
    '/feed/comment/lookup',
    feedId
  );
  return response.data;
}

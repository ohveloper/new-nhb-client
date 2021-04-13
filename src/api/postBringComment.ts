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
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjE4Mjc3NTYyLCJleHAiOjE2MTgyOTU1NjJ9._gi5L0jux1h7E3euLIYV5jyFabWQFJGiRp9A-s6MzN8',
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

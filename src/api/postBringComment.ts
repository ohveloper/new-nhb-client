import axios from 'axios';
import dotenv from 'dotenv';
import { BringComment } from '../reducers/reducer';
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

export interface Feed_Id {
  feedId: number;
}

export async function postBringCommentT(feedId: Feed_Id) {
  const response = await apiClient.post<BringComment>(
    '/feed/comment/lookup',
    feedId
  );
  return response.data;
}

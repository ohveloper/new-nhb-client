import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE4MjM0ODA2LCJleHAiOjE2MTgyNTI4MDZ9.lVxpNSqwfakKSJBkHzDABYo8i44u65l73Gde0OfLgTk',
  },
});
export interface Content {
  content: string[];
  word: string;
}

export interface UploadFeed {
  message: string;
}

export async function postUploadFeedT(content: Content) {
  const response = await apiClient.post<UploadFeed>('/feed', content);
  return response.data;
}

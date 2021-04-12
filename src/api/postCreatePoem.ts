import axios from 'axios';
import { UserFeeds } from '../reducers/poemReducer';
import { Feed } from '../reducers/poemReducer';

const apiClient = axios.create({
  baseURL: 'https://localhost:5000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'withCredentials': true,
  },
});

export type Content = {
  content: string[];
  word: string;
};

export type UploadMsg = {
  message: string;
};

export async function postCreatePoemT(feed: Content) {
  const response = await apiClient.post<UploadMsg>('/feed', feed);
  return response.data;
}

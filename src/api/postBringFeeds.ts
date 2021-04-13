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
    'withCredentials': true,
  },
});
export interface Feed {
  limit: number;
  feedId: number | null;
}

export async function postBringFeedT(feed: Feed) {
  if (feed) {
    const response = await apiClient.post<Welcome>('/feed/lookup', feed);
    return response.data;
  } else {
    const response = await apiClient.post<Welcome>('/feed/lookup', feed);
    return response.data;
  }
}

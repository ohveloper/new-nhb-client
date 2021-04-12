import axios from 'axios';
import { Welcome } from '../reducers/reducer';

const apiClient = axios.create({
  baseURL: 'https://localhost:5000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
export interface Feed {
  limit?: number;
  feedId?: number;
}

export async function postUserFeedT(feed?: Feed) {
  if (feed) {
    const response = await apiClient.post<Welcome>('/feed/lookup', feed);
    return response.data;
  } else {
    const response = await apiClient.post<Welcome>('/feed/lookup', {});
    return response.data;
  }
}

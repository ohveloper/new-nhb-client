import axios from 'axios';
import { PrivateFeed } from '../reducers/initialState';

const apiClient = axios.create({
  baseURL: 'https://localhost:4000/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getPrivateFeedT(url: string) {
  const response = await apiClient.get<PrivateFeed>(url);
  return response.data;
}

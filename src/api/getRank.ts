import axios from 'axios';
import { Rank } from '../reducers/initialState';

const apiClient = axios.create({
  baseURL: 'https://localhost:5000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getRankT() {
  const response = await apiClient.get<Rank>('/feed/rank');
  return response.data;
}

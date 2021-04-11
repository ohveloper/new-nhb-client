import axios from 'axios';
import { Rank } from '../reducers/initialState';

const apiClient = axios.create({
  baseURL: 'https://localhost:4000/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getRankT(url: string) {
  const response = await apiClient.get<Rank>(url);
  return response.data;
}

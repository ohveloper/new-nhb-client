import axios from 'axios';
import { UserInfo } from '../reducers/initialState';

const apiClient = axios.create({
  baseURL: 'https://localhost:5000/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getUserInfoT(url: string) {
  const response = await apiClient.get<UserInfo>(url);
  return response.data;
}

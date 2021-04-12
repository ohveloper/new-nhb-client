import axios from 'axios';
import dotenv from 'dotenv';
import { UserInfoT } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface UUID {
  userId: number | null;
}

export async function postBringUserInfoT(userId: UUID) {
  const response = await apiClient.post<UserInfoT>('/user', userId);
  return response.data;
}

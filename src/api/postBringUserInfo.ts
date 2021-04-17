import axios from 'axios';
import dotenv from 'dotenv';
import { UserInfo } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface UUID {
  userId?: number | null;
}

export async function postBringUserInfoT(userId: UUID, accessToken: string) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  const response = await apiClient.post<UserInfo>('/user', userId);
  return response.data;
}

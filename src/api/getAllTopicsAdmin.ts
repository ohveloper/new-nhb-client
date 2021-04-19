import axios from 'axios';
import dotenv from 'dotenv';
import { TopicsAdmin } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export async function getAllTopicsAdminT(accessToken: string) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  const response = await apiClient.get<TopicsAdmin>('/admin/topic');
  return response.data;
}

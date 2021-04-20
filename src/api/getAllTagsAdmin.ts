import axios from 'axios';
import dotenv from 'dotenv';
import { AdminTags } from '../reducers/reducer';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export async function getAllTagsAdminT(accessToken: string) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  const response = await apiClient.get<AdminTags>('/admin/tag');
  return response.data;
}

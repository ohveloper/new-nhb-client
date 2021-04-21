import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface delRemoveTagAdminTProps {
  data: {
    tagId: string;
  };
}

export async function delRemoveTagAdminT(
  tagId: delRemoveTagAdminTProps,
  accessToken: string
) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  const response = await apiClient.delete('/admin/tag', tagId);
  return response.data;
}

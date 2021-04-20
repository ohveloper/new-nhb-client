import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface AdminPostUploadTagTProps {
  tagUrl: string;
  tagName: string;
  description: string;
}

export async function AdminPostUploadTagT(
  AdminPostUploadTagTProps: AdminPostUploadTagTProps,
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
  const response = await apiClient.post('/admin/tag', AdminPostUploadTagTProps);
  return response.data;
}

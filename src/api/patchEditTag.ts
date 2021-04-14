import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface TagName {
  tagName: string | null;
}

export async function patchEditTagsT(tagName: TagName, accessToken: string) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'withCredentials': true,
      'authorization': `Bearer ${accessToken}`,
    },
  });
  const response = await apiClient.patch('/user/tag', tagName);
  return response.data;
}

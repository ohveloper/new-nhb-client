import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface Content {
  content: string[];
  word: string;
}

export interface UploadFeed {
  message: string;
}

export async function postUploadFeedT(content: Content, accessToken: string) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  const response = await apiClient.post<UploadFeed>('/feed', content);
  return response.data;
}

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface EditFeedParameter {
  content: string[];
  feedId: number;
}

export interface EditFeed {
  message: string;
}

export async function patchEditFeedT(
  editFeedParameter: EditFeedParameter,
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
  const response = await apiClient.patch<EditFeed>('/feed', editFeedParameter);
  return response.data;
}

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface OAuth {
  data: {
    accessToken: string;
  };
}

export async function getOAuthT(accessToken: string) {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'authorization': accessToken,
    },
    withCredentials: true,
  });

  const response = await apiClient.get<OAuth>('/main/oauth');
  return response.data;
}

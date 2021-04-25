import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface accessTokenRefresh {
  data: {
    accessToken: string;
  };
}

export async function refreshTokenT() {
  const apiClient = axios.create({
    baseURL: api,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  const response = await apiClient.get<accessTokenRefresh>(
    '/main/refreshtoken'
  );
  return response.data;
}

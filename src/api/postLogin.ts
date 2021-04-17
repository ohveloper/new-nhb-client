import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export interface AuthCode {
  authCode: string;
}

export interface AccessToken {
  data: {
    accessToken: string;
  };
}

export async function postLoginT(authCode: AuthCode) {
  const response = await apiClient.post<AccessToken>('/main/login', authCode);
  return response.data;
}

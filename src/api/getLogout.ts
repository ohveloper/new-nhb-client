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

export async function getLogoutT() {
  const response = await apiClient.get('/main/logout');
  return response.data;
}

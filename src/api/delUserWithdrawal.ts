import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';
const accessToken = process.env.AccessToken || 'hello';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'withCredentials': true,
    'authorization': `Bearer ${accessToken}`,
  },
});

export async function delUserWithdrawalT() {
  const response = await apiClient.delete('/user');
  return response.data;
}

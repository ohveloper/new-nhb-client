import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

export interface EditUserInfoParameter {
  avatarUrl: string | null;
  nickName: string | null;
  introduction: string | null;
}

export async function patchEditUserInfoT(
  editUserInfoParameter: EditUserInfoParameter,
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
  const response = await apiClient.patch('/user', editUserInfoParameter);
  return response.data;
}

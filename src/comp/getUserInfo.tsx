import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function GetUserInfo() {
  const state = useSelector((state: any) => state.getInfo);
  console.log(state.userInfo);
  return (
    <div>
      <div>타입스크립트</div>
    </div>
  );
}

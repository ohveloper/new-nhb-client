import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyIntroduction() {
  const state = useSelector((state: RootState) => state.reducer);
  const myIntroduction = state.userInfo.data?.data.userInfo.introduction;
  return (
    <div>
      <h1>MyIntroduction</h1>
      <div>{myIntroduction ? myIntroduction : '소개글이 없습니다'}</div>
    </div>
  );
}

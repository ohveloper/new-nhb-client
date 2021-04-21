import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './MyIntroduction.scss';

export default function MyIntroduction() {
  const state = useSelector((state: RootState) => state.reducer);
  const myIntroduction = state.userInfo.data?.data.userInfo.introduction;
  return (
    <div id="MyIntroduction">
      {/* <div className="my-introduction-title">MyIntroduction</div> */}
      <div>{myIntroduction ? myIntroduction : '소개글이 없습니다'}</div>
    </div>
  );
}

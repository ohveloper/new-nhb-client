import React from 'react';
import { useSelector }  from 'react-redux';
import { RootState } from '../modules';

export default function GetUserInfo() {
  const state = useSelector((state: any) => state.getInfo)
  console.log(state.userFeeds)
  return (
    <div>
      <div>확인좀 하자</div>
    </div>
  )
}

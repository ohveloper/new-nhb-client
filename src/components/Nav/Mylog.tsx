import React from 'react';
import { RootState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { postBringUserInfoThunk } from '../../actions/actions';

function Mylog() {
  const state = useSelector((state: RootState) => state.reducer);
  const userState = state.userInfo.data;
  console.log('userState : ', userState);
  return (
    <div>
      <div>
        지금까지 작성한 N행시 : {state.userInfo.loading && '정보를 가져오는 중'}
        {userState && userState}
      </div>
      <div></div>
    </div>
  );
}

export default Mylog;

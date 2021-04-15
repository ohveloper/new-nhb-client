import React, { useState } from 'react';

import { RootState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { postLogInThunk } from '../../actions/getInfoActions';

function NavLogin() {
  const state = useSelector((state: RootState) => state.reducer);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const postLoginHandler = () => {
    console.log(state);
    dispatch(postLogInThunk({ authCode: '' }));
  };

  return (
    <div>
      <div>로그인</div>
      <div>이메일로 로그인 </div>
      <input
        className="inputId"
        type="text"
        value={inputValue}
        placeholder="이메일을 입력하세요"
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button onClick={postLoginHandler}>로그인</button>
    </div>
  );
}

export default NavLogin;

import React, { useState } from 'react';
import axios from 'axios';

import { RootState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { postLogInThunk } from '../../actions/getInfoActions';
const handleLogin = () => {
  return axios
    .post(
      'https://localhost:5000/main/login',
      {
        authCode: 123,
      },
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

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

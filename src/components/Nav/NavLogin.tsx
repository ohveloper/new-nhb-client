import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { postSendAuthEmailT } from '../../api/postSendAuthEmail';

function NavLogin() {
  const state = useSelector((state: RootState) => state.reducer);
  const accessToken = state.accessToken;

  const [inputValue, setInputValue] = useState('');

  const loginHandler = () => {
    postSendAuthEmailT({ email: inputValue })
      .then((data) => {
        if (data.message === '회원가입') {
          setInputValue('회원가입 링크가 이메일로 전송되었습니다.');
        } else if (data.message === '로그인') {
          setInputValue('로그인 링크가 이메일로 전송되었습니다.');
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="loginContent">{accessToken ? '로그인' : '회원가입'}</div>
      <div>이메일로 로그인 </div>
      <input
        className="inputId"
        type="text"
        value={inputValue || ''}
        placeholder="이메일을 입력하세요"
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button onClick={() => loginHandler()}>로그인</button>
    </div>
  );
}

export default NavLogin;

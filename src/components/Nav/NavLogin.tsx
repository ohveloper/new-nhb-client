import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

function NavLogin() {
  const state = useSelector((state: RootState) => state.reducer);
  const accessToken = state.accessToken;

  const [inputValue, setInputValue] = useState('');

  const loginHandler = () => {
    // await postSendAuthEmailT({ email: inputValue }).then((data) => {
    //   if (data.message === '회원가입') {
    //     alert('아직 회원이 아니시군요 회원가입 부탁드립니다 : )');
    //   }
    // });
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

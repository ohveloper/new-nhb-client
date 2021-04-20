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

  const googleOAuthHandler = () => {
    const googleLoginUrl =
      'https://accounts.google.com/o/oauth2/v2/auth?scope=email&response_type=token&redirect_uri=https://nhbomb.tk/&client_id=362611946205-6l2dnifmmd9e13crdhkh9n1t7qofnjpk.apps.googleusercontent.com';

    // const googleLoginUrl =
    //   'https://accounts.google.com/o/oauth2/v2/auth?client_id=362611946205-6l2dnifmmd9e13crdhkh9n1t7qofnjpk.apps.googleusercontent.com&response_type=token&redirect_uri=https://localhost:3000&scope=email';

    window.location.assign(googleLoginUrl);
  };

  return (
    <>
      <div>
        <div className="loginContent">
          {accessToken ? '로그인' : '회원가입'}
        </div>
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
      <div>
        <p onClick={() => googleOAuthHandler()}>google OAuth</p>
      </div>
    </>
  );
}

export default NavLogin;

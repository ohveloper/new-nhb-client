import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFakeDataThunk } from '../../actions/actions';
import { postSendAuthEmailT } from '../../api/postSendAuthEmail';

function NavLogin() {
  const [inputValue, setInputValue] = useState('');
  const [clientStatus, setClientStatus] = useState('로그인');
  const dispatch = useDispatch();
  const loginHandler = () => {
    if (inputValue !== '') {
      postSendAuthEmailT({ email: inputValue })
        .then((data) => {
          if (data.message === '회원가입') {
            setClientStatus('회원가입');
            setInputValue('회원가입 링크가 이메일로 전송되었습니다.');
          } else if (data.message === '로그인') {
            setInputValue('로그인 링크가 이메일로 전송되었습니다.');
          }
        })
        .catch((e) => console.log(e));
    }
  };

  const googleOAuthHandler = () => {
    // //? Deploy 용
    const googleLoginUrl =
      'https://accounts.google.com/o/oauth2/v2/auth?scope=email&response_type=token&redirect_uri=https://nhbomb.tk/&client_id=362611946205-6l2dnifmmd9e13crdhkh9n1t7qofnjpk.apps.googleusercontent.com';

    // ? local Test
    // const googleLoginUrl =
    //   'https://accounts.google.com/o/oauth2/v2/auth?scope=email&response_type=token&redirect_uri=https://localhost:3000/&client_id=362611946205-6l2dnifmmd9e13crdhkh9n1t7qofnjpk.apps.googleusercontent.com';

    // ? 잘못 작성한 코드
    // const googleLoginUrl =
    //   'https://accounts.google.com/o/oauth2/v2/auth?client_id=362611946205-6l2dnifmmd9e13crdhkh9n1t7qofnjpk.apps.googleusercontent.com&response_type=token&redirect_uri=https://localhost:3000/&scope=email';

    window.location.assign(googleLoginUrl);
  };

  const guestLogin = () => {
    dispatch(getFakeDataThunk());
  };

  return (
    <>
      <div>
        <div className="loginContent">{clientStatus}</div>
        {/* <div>이메일로 로그인 </div> */}
        <div id="loginContainer">
          <input
            className="inputId"
            type="email"
            value={inputValue || ''}
            placeholder="이메일을 입력하세요"
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <button onClick={() => loginHandler()}>{clientStatus}</button>
          <button onClick={() => googleOAuthHandler()}>Google 로그인</button>
          <button onClick={() => guestLogin()}>GUEST 로그인</button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default NavLogin;

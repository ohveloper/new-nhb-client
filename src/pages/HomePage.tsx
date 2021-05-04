import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  postLogInThunk,
  postSignUpThunk,
  getOAuthThunk,
  refreshTokenThunk,
  getLogOutThunk,
} from '../actions/actions';
import HomepageWritersRanking from '../components/Home/HomepageWritersRanking';
import ThanksTo from '../components/Home/ThanksTo';
import Footer from '../components/Home/Footer';
import NavSidebarContainer from '../components/NavSidebar/NavSidebarContainer';
import '../styles/HomepageSidebar/Homepage.scss';
import '../styles/index.scss';

import Introduce from '../components/Home/Introduce';
import { refreshTokenT } from '../api/refreshToken';
import { useEffect } from 'react';
import { RootState } from '../reducers';
import { getAccessTokenAsync } from '../actions/actionTypes';

export default function HomePage() {
  const dispatch = useDispatch();
  const url: string = document.location.href;
  const userAuthCode: string = url.slice(url.indexOf('=') + 1);
  const state = useSelector((state: RootState) => state.reducer);

  useEffect(() => {
    const accessToken = state.accessToken;
    if (accessToken) {
      const { success } = getAccessTokenAsync;
      refreshTokenT()
        .then((x) => dispatch(success(x)))
        .catch(() => getLogOutThunk());
    }
  }, []);

  //? 링크를 통해 들어온 client 구분하기 위한 함수
  function checkClient() {
    //? 회원가입한 유저
    if (url.includes('login')) {
      setTimeout(() => {
        dispatch(postLogInThunk({ authCode: userAuthCode }));
      }, 1000);
      setTimeout(() => {
        // ? 배포용 리다이렉트
        window.location.assign('https://nhbomb.tk');
      }, 1001);

      // ? 테스트용 리다이렉트
      // window.location.assign('https://localhost:3000/');
    }
    //? 회원가입 유저
    else if (url.includes('signup')) {
      setTimeout(() => {
        dispatch(postSignUpThunk({ authCode: userAuthCode }));
      }, 1000);
      setTimeout(() => {
        // ? 배포용 리다이렉트
        window.location.assign('https://nhbomb.tk');
      }, 1001);

      // ? 테스트용 리다이렉트
      // window.location.assign('https://localhost:3000/');
    }

    //? googleOAuth용
    else if (url.includes('access_token')) {
      const url = new URL(window.location.href);
      const first = url.hash.indexOf('n=');
      const last = url.hash.indexOf('&t');

      const accessToken = url.hash.slice(first + 2, last);
      dispatch(getOAuthThunk(accessToken));

      // setTimeout(() => {
      //   dispatch(getOAuthThunk(accessToken));
      // }, 1000);
      setTimeout(() => {
        // ? 배포용 리다이렉트
        window.location.assign('https://nhbomb.tk');
        // window.location.assign('https://localhost:3000/');
      }, 5001);
      // ? 테스트용 리다이렉트
    }
  }

  void checkClient();

  return (
    <div id="Homepage">
      <NavSidebarContainer />
      <div id="HomepageIntroduce">
        <div>
          <Introduce />
        </div>
        <div>
          <HomepageWritersRanking />
        </div>
      </div>

      <div id="neonContainer">
        <Link to="/main">
          <div id="neon">N행시 작성하러 가기</div>
        </Link>
      </div>
      {/* <div className="App">:sunglasses: </div> */}
      <ThanksTo />
      <Footer />
    </div>
  );
}

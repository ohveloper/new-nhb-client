import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  postLogInThunk,
  postSignUpThunk,
  getOAuthThunk,
} from '../actions/actions';
import HomepageWritersRanking from '../components/Home/HomepageWritersRanking';
import ThanksTo from '../components/Home/ThanksTo';
import Footer from '../components/Home/Footer';
import NavSidebarContainer from '../components/NavSidebar/NavSidebarContainer';
import '../styles/Homepage.scss';

export default function HomePage() {
  const dispatch = useDispatch();
  const url: string = document.location.href;
  const userAuthCode: string = url.slice(url.indexOf('=') + 1);

  //? 링크를 통해 들어온 client 구분하기 위한 함수
  function checkClient() {
    //? 회원가입한 유저
    if (url.includes('login')) {
      console.log('loginT');
      dispatch(postLogInThunk({ authCode: userAuthCode }));
    }
    //? 회원가입 유저
    else if (url.includes('signup')) {
      console.log('signup');
      dispatch(postSignUpThunk({ authCode: userAuthCode }));
    }

    //? googleOAuth용
    else if (url.includes('access_token')) {
      const url = new URL(window.location.href);
      const first = url.hash.indexOf('n=');
      const last = url.hash.indexOf('&t');

      const accessToken = url.hash.slice(first + 2, last);

      dispatch(getOAuthThunk(accessToken));
    }
  }

  checkClient();

  return (
    <div id="Homepage">
      <NavSidebarContainer />
      <Link to="/main">
        <div id="neon">N행시 작성하러 가기</div>
      </Link>
      <HomepageWritersRanking />
      <div className="App">:sunglasses: </div>
      <ThanksTo />
      <Footer />
    </div>
  );
}

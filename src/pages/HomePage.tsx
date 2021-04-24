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
import '../styles/HomepageSidebar/Homepage.scss';
import Introduce from '../components/Home/Introduce';

export default function HomePage() {
  const dispatch = useDispatch();
  const url: string = document.location.href;
  const userAuthCode: string = url.slice(url.indexOf('=') + 1);

  //? 링크를 통해 들어온 client 구분하기 위한 함수
  async function checkClient() {
    //? 회원가입한 유저
    if (url.includes('login')) {
      console.log('loginT');

      // eslint-disable-next-line @typescript-eslint/await-thenable
      await dispatch(postLogInThunk({ authCode: userAuthCode }));

      window.location.assign('https://localhost:3000/');
    }
    //? 회원가입 유저
    else if (url.includes('signup')) {
      console.log('signup');
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await dispatch(postSignUpThunk({ authCode: userAuthCode }));

      window.location.assign('https://localhost:3000/');
    }

    //? googleOAuth용
    else if (url.includes('access_token')) {
      const url = new URL(window.location.href);
      const first = url.hash.indexOf('n=');
      const last = url.hash.indexOf('&t');

      const accessToken = url.hash.slice(first + 2, last);

      // eslint-disable-next-line @typescript-eslint/await-thenable
      await dispatch(getOAuthThunk(accessToken));

      window.location.assign('https://localhost:3000/');
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
      <div className="App">:sunglasses: </div>
      <ThanksTo />
      <Footer />
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postLogInThunk, postSignUpThunk } from '../actions/actions';
import axios from 'axios';

import HomepageWritersRanking from '../components/Home/HomepageWritersRanking';
import Footer from '../components/Home/Footer';
import NavSidebarContainer from '../components/NavSidebar/NavSidebarContainer';
import '../styles/Homepage.css';

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
      console.log('accessToken :', accessToken);
      const api =
        process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';

      const apiClient = axios.create({
        baseURL: api,
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `${accessToken}`,
        },
        withCredentials: true,
      });

      console.log('here to gouth');

      apiClient
        .get(`${api}/main/oauth`) //? Google OAuth
        .then((res) => {
          console.log('res.data : ', res.data);
          if (res.data) {
            // window.location.assign('https://localhost:3000/');
          }
        })
        .catch((e) => console.log(e));
    }
  }

  checkClient();

  return (
    <div id="Homepage">
      <NavSidebarContainer />
      <Link to="/main">
        <p>N행시 작성하러 가기</p>
      </Link>
      <HomepageWritersRanking />
      <div className="App">:sunglasses: </div>
      <Footer />
    </div>
  );
}

import Homebutton from '../components/Home/Homebutton';
import Sidebar from '../components/Home/Sidebar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postLogInThunk, postSignUpThunk } from '../actions/actions';
import HomepagePoemsRanking from '../components/Home/HomepagePoemsRanking';

export default function HomePage() {
  const dispatch = useDispatch();
  const url: string = document.location.href;
  const userAuthCode: string = url.slice(url.indexOf('=') + 1);

  //? 링크를 통해 들어온 client 구분하기 위한 함수
  function checkClient() {
    // //? 회원가입한 유저
    console.log('url : ', url);
    if (url.includes('login')) {
      console.log('logiinT');
      dispatch(postLogInThunk({ authCode: userAuthCode }));
    } else if (url.includes('signup')) {
      console.log('signup');
      dispatch(postSignUpThunk({ authCode: userAuthCode }));
      console.log('true');
    }
  }

  checkClient();

  return (
    <div>
      <Homebutton />
      <br />
      <Sidebar />
      <br />
      <Link to="/main">
        <p>N행시 작성하러 가기</p>
      </Link>
      <br />
      <Link to="/apitest">
        <p> apitest</p>
      </Link>
      <HomepagePoemsRanking />
      <div className="App">:sunglasses: </div>
    </div>
  );
}

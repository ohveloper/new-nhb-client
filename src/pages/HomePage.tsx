import Homebutton from '../components/Home/Homebutton';
import Sidebar from '../components/Home/Sidebar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postLogInThunk } from '../actions/actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const url: string = document.location.href;
  const userAuthCode: string = url.slice(url.indexOf('=') + 1);

  //? 링크를 통해 들어온 client 구분하기 위한 함수
  function checkClient() {
    // //? 회원가입한 유저
    console.log('here');
    if (url.includes('login')) {
      dispatch(postLogInThunk({ authCode: userAuthCode }));
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
      <Link to="/mypage">
        <p> Mypage</p>
      </Link>
      <Link to="/apitest">
        <p> apitest</p>
      </Link>
      <div className="App">:sunglasses: </div>
    </div>
  );
}

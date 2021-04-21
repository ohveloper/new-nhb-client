import { RootState } from '../../reducers';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { postBringUserInfoThunk } from '../../actions/actions';

function Mylog() {
  const state = useSelector((state: RootState) => state.reducer);
  const userState = state.userInfo.data;
  console.log('userState : ', userState);
  return (
    <div>
      <div>하루 끝 N행시</div>
      <div>
        <Link to="/main">
          <p>작성하러 가기</p>
        </Link>
      </div>
    </div>
  );
}

export default Mylog;

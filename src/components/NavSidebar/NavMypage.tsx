import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postBringUserInfoThunk } from '../../actions/actions';
import { postBringUserInfoT } from '../../api/postBringUserInfo';
import { RootState } from '../../reducers';

function NavMyPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const accessToken = state.accessToken;
  useEffect(() => {
    if (accessToken) {
      postBringUserInfoT({ userId: null }, accessToken)
        .then((x) =>
          dispatch(postBringUserInfoThunk({ userId: null }, accessToken))
        )
        .catch((e) => console.log(e));
    }
  }, []);
  return (
    <div>
      <div>Welcome back!</div>
      <div>
        <Link to="/mypage">Go to Mypage</Link>
      </div>
    </div>
  );
}

export default NavMyPage;

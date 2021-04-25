import '../../styles/HomepageSidebar/Footer.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function Footer() {
  const state = useSelector((state: RootState) => state.reducer);
  const isAdmin = state.login.data?.isAdmin;
  return (
    <div id="Footer">
      <div>{isAdmin ? <Link to="/apitest">API TEST</Link> : <div></div>}</div>
      <div>
        Team<span className="first">B</span>BBA
      </div>
      <div>
        {isAdmin ? (
          <Link to="/admin">Admin</Link>
        ) : (
          <div>Welcome {state.userInfo.data?.data.userInfo.nickName}</div>
        )}
      </div>
    </div>
  );
}

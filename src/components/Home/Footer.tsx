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
        Team
        <a href="https://github.com/Sangrae-Cho">
          <span className="first">B</span>
        </a>
        <a href="https://github.com/ohveloper">
          <span className="first">B</span>
        </a>
        <a href="https://github.com/riley909">
          <span className="first">B</span>
        </a>
        <a href="https://github.com/duck-moon9392">
          <span className="first">A</span>
        </a>
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

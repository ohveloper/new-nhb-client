import '../NavSidebar/NavSidebar.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div id="Footer">
      <div>
        <Link to="/apitest">
          <p> apitest</p>
        </Link>
      </div>
      <div>TeamBBBA</div>
      <div>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

function Mylog() {
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

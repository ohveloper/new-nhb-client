import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';

export default function ThanksTo() {
  const state = useSelector((state: RootState) => state.reducer);
  const isAdmin = state.login.data?.isAdmin;
  return (
    <div>
      {isAdmin ? (
        <div>개발자분들 마지막까지 화이팅입니다 ㅜㅜ!!!!!!</div>
      ) : (
        <></>
      )}
    </div>
  );
}

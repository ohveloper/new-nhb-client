import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyNickName() {
  const state = useSelector((state: RootState) => state.reducer);
  const nickName = state.userInfo.data?.data.userInfo.nickName;

  return (
    <div>
      <h1>MyNickName</h1>
      <div>{state.userInfo.data && nickName}</div>
    </div>
  );
}

import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './MyNickName.scss';

export default function MyNickName() {
  const state = useSelector((state: RootState) => state.reducer);
  const nickName = state.userInfo.data?.data.userInfo.nickName;

  return (
    <div id="MyNickName">
      <div>{state.userInfo.data && nickName}</div>
    </div>
  );
}

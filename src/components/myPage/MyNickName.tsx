import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './styles/MyNickName.scss';

export default function MyNickName() {
  const state = useSelector((state: RootState) => state.reducer);
  const nickName = state.userInfo.data?.data.userInfo.nickName;

  return (
    <div id="MyNickName">
      <div className="myinfo-nickname">{state.userInfo.data && nickName}</div>
    </div>
  );
}

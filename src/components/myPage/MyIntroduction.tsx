import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './styles/MyIntroduction.scss';

export default function MyIntroduction() {
  const state = useSelector((state: RootState) => state.reducer);
  const myIntroduction = state.userInfo.data?.data.userInfo.introduction;
  return (
    <div id="MyIntroduction">
      <div>{myIntroduction ? myIntroduction : '소개글이 없습니다'}</div>
    </div>
  );
}

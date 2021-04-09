import Sample_User_Icon from '../../img/Sample_User_Icon.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyPhotoNickName() {
  const state = useSelector((state: RootState) => state.getInfoReducer);
  const { nickName } = state.userInfo;
  return (
    <div>
      <h1>MyPhotoNickName</h1>
      <div>
        <img src={Sample_User_Icon} alt="" />
      </div>
      <div>{nickName}</div>
      <button>수정하기</button>
    </div>
  );
}

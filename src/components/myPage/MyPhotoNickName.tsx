import Sample_User_Icon from '../../img/Sample_User_Icon.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyPhotoNickName() {
<<<<<<< HEAD
  const state = useSelector((state: RootState) => state.myPage);
=======
  const state = useSelector((state: RootState) => state.getInfoReducer);
>>>>>>> 988d226fae20fd6c000ef580be6b0a19d1d45d9b
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

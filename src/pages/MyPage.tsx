import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyPhotoNickName from '../components/myPage/MyPhotoNickName';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserInfoThunk,
  postBringFeedsThunk,
} from '../actions/getInfoActions';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';

export default function MyPage() {
  const { userFeeds } = useSelector((state: RootState) => state.reducer);
  const { userInfo } = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(postBringFeedsThunk({ limit: 3, feedId: 2 }));
    dispatch(getUserInfoThunk({ userId: 1 }));
  };
  console.log('userFeeds: ', userFeeds);
  console.log('userInfo: ', userInfo);
  return (
    <>
      <Homebutton />
      <Sidebar />
      <button onClick={onClickHandler}>클릭</button>
      <div>
        <MyWorkContainer />
      </div>
      <div>
        <MyAchievementContainer />ㅗ
      </div>
      <div>
        <MyPhotoNickName />
      </div>
    </>
  );
}

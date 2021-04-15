import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyPhotoNickName from '../components/myPage/MyPhotoNickName';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';
import { RootState } from '../reducers';
import { useSelector } from 'react-redux';

export default function MyPage() {
  const state = useSelector((state: RootState) => state.reducer);
  if (state.accessToken) console.log(state.accessToken);
  console.log(state.accessToken);
  return (
    <>
      <Homebutton />
      <Sidebar />
      <div>
        <MyWorkContainer />
      </div>
      <div>
        <MyAchievementContainer />
      </div>
      <div>
        <MyPhotoNickName />
      </div>
    </>
  );
}

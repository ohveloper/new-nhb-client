import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyPhotoNickName from '../components/myPage/MyPhotoNickName';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';

export default function MyPage() {
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

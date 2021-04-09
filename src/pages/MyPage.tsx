import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyPhotoNickName from '../components/myPage/MyPhotoNickName';
import MyWorkContainer from '../components/myPage/MyWorkContainer';

export default function MyPage() {
  return (
    <>
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

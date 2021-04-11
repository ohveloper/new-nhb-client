import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyPhotoNickName from '../components/myPage/MyPhotoNickName';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import { RootState } from '../reducers';
import { useSelector } from 'react-redux';

export default function MyPage() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.reducer.userInfo
  );

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

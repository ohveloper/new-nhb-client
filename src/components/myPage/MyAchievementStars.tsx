import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyAchievementStars() {
  const state = useSelector((state: RootState) => state.reducer);
  const stars = state.userInfo.data?.data.userInfo.userLikeNum;
  console.log(state.userInfo.data?.data.userInfo.userLikeNum);
  return (
    <div>
      <h1>MyAchievementStars</h1>
      <div>{stars}</div>
    </div>
  );
}

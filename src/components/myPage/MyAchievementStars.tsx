import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './MyAchievementStars.scss';

export default function MyAchievementStars() {
  const state = useSelector((state: RootState) => state.reducer);
  const stars = state.userInfo.data?.data.userInfo.userLikeNum;

  return (
    <div id="MyAchievementStars">
      <h1>MyAchievementStars</h1>
      <div>{stars}</div>
    </div>
  );
}

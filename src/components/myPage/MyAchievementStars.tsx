import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function MyAchievementStars() {
  const state = useSelector((state: RootState) => state.getInfo);
  const { userInfo } = state;
  return (
    <div>
      <h1>MyAchievementStars</h1>
    </div>
  );
}

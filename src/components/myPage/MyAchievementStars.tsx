import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './styles/MyAchievementStars.scss';
import Star from './Star';

export default function MyAchievementStars() {
  const state = useSelector((state: RootState) => state.reducer);
  const stars = state.userInfo.data?.data.userInfo.userLikeNum;

  return (
    <div id="MyAchievementStars">
      <div className="my-starts-title">내가 받은 별</div>
      <div className="star-title-container-flexbox">
        <div className="star-title-container">
          <div className="star">별</div>
          <div> X </div>
          <div>{stars}</div>
        </div>
        <div className="star-container">
          <div>{stars && <Star />}</div>
        </div>
      </div>
    </div>
  );
}

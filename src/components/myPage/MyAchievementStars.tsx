import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './styles/MyAchievementStars.scss';
import Star from './Star';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function MyAchievementStars() {
  const state = useSelector((state: RootState) => state.reducer);
  const stars = state.userInfo.data?.data.userInfo.userLikeNum;
  const setIcon = <FontAwesomeIcon icon={faTimes} />;

  return (
    <div id="MyAchievementStars">
      <div className="my-starts-title">내가 받은 별</div>
      <div className="star-title-container-flexbox">
        <div className="star-title-container">
          <div className="star">별</div>
          <div className="star-x-icon"> {setIcon} </div>
          <div className="star-count">{stars}</div>
        </div>
        <div className="star-container">
          <div>{stars && <Star />}</div>
        </div>
      </div>
    </div>
  );
}

import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './styles/Star.scss';

export default function Star() {
  const state = useSelector((state: RootState) => state.reducer);
  const stars = state.userInfo.data?.data.userInfo.userLikeNum;
  const starsArr = [...new Array(stars).keys()];

  return (
    <div className="star-box">
      {starsArr.map((x, idx) => (
        <div key={idx} className="star"></div>
      ))}
    </div>
  );
}

import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

export default function MyAchievementBadges() {
  const state = useSelector((state: RootState) => state.getInfo);
  const { tags } = state.userInfo;
  const tagsKeys = Object.keys(tags);
  return (
    <div>
      <h1>MyAchievementBadges</h1>
      <div>
        {tagsKeys.map((x, idx) => {
          console.log(tags[x].isUsed);
          return tags[x].isUsed ? (
            <p style={{ color: 'red' }} key={idx}>
              true : {x}
            </p>
          ) : (
            <p key={idx}>false : {x}</p>
          );
        })}
      </div>
      <button>뱃지고르러가기</button>
    </div>
  );
}

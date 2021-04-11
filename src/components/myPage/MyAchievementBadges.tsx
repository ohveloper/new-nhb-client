import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyAchievementBadges() {
  const [badges, setBadges] = useState([
    { hund: 'url' },
    { king: 'url' },
    { newbie: 'url' },
    { everyday: 'url' },
  ]);
  const state = useSelector((state: RootState) => state.getInfoReducer);
  const { tags } = state.userInfo;
  const tagsKeys = Object.keys(tags);
  return (
    <div>
      <h1>MyAchievementBadges</h1>
      <div>
        {tagsKeys.map((x, idx) => {
          return tags[x].isUsed ? (
            <p style={{ color: 'red' }} key={idx}>
              true : {x}
            </p>
          ) : (
            <p key={idx}>false : {x}</p>
          );
        })}
      </div>
      <div>
        {badges.map((x) => (
          <p style={{ color: 'blue' }}>{Object.keys(x)[0]}</p>
        ))}
      </div>
      <button>뱃지고르러가기</button>
    </div>
  );
}

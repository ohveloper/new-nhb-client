import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyAchievementBadges() {
<<<<<<< HEAD
  const state = useSelector((state: RootState) => state.myPage);
=======
  const state = useSelector((state: RootState) => state.getInfoReducer);
>>>>>>> 988d226fae20fd6c000ef580be6b0a19d1d45d9b
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
      <button>뱃지고르러가기</button>
    </div>
  );
}

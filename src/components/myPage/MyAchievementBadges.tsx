import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyAchievementBadges() {
  const state = useSelector((state: RootState) => state.getInfoReducer);
  const { tags } = state.userInfo;
  const { badges } = state;
  const myTagsId = tags.map((x) => x.tagId);

  return (
    <div>
      <h1>MyAchievementBadges</h1>
      <div>
        {badges.map((badge) =>
          !myTagsId.includes(badge.tagId) ? (
            <p style={{ color: 'gray' }}>{badge.tagName}</p>
          ) : tags[badge.tagId - 1].isUsed ? (
            <p style={{ border: 'blue 2px solid', color: 'red' }}>
              {badge.tagName}
            </p>
          ) : (
            <p style={{ color: 'red' }}>{badge.tagName}</p>
          )
        )}
      </div>
      <div>
        {
          //? 내가 가지고 있으면 빨강색
          //? 내가 선택한건 테두리 파랑색
          //? 없는건 회색
        }
        {/* {badges.map((x) =>
          !tagsKeys.includes(Object.keys(x)[0]) ? (
            <p style={{ color: 'gray' }}>
              아직 못가진 뱃지: {Object.keys(x)[0]}
            </p>
          ) : tags[Object.keys(x)[0]].isUsed ? (
            <p style={{ border: 'blue 2px solid' }}>
              선택한 뱃지: {Object.keys(x)[0]}
            </p>
          ) : (
            <p style={{ color: 'red' }}>내가 가진 뱃지: {Object.keys(x)[0]}</p>
          )
        )} */}
      </div>
      <button>뱃지선택</button>
    </div>
  );
}

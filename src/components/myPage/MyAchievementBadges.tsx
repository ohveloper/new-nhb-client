import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyAchievementBadges() {
  const state = useSelector((state: RootState) => state.reducer);
  const allTags = state.tags.data?.data;
  const myInfo = state.userInfo.data?.data.userInfo;
  console.log(myInfo?.tags);
  const myTagsId = myInfo?.tags.map((x) => x.tagId);
  console.log(myTagsId);

  return (
    <div>
      <h1>MyAchievementBadges</h1>
      <div>
        {
          //? 시작: 모든 테그를 렌더한다
          allTags?.tags.map((badge) =>
            //? 조건1: 내가 가지고 있지 않으면? 회색으로 렌더
            !myTagsId?.includes(badge.id) ? (
              <div key={badge.id} style={{ color: 'gray' }}>
                <div>
                  {badge.tagName}
                  <div>{badge.description}</div>
                </div>
              </div>
            ) : //? 조건2: 내가 가지고 있으면서 사용중이면 보더박스 레드로 테두리 치기
            myInfo?.tags[badge.id - 1].isUsed ? (
              <div
                key={badge.id}
                style={{ border: 'blue 2px solid', color: 'red' }}
              >
                <div>
                  {badge.tagName}
                  <div>{badge.description}</div>
                </div>
              </div>
            ) : (
              //? 조건3: 가지고 있지만 선택하지 않았으면 글씨색 빨간색
              <div key={badge.id} style={{ color: 'red' }}>
                <div>
                  {badge.tagName}
                  <div>{badge.description}</div>
                </div>
              </div>
            )
          )
        }
      </div>
      <button>뱃지선택</button>
    </div>
  );
}

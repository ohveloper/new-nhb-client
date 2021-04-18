import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

interface PropsType {
  badgeModalHandler: () => void;
}

export default function MyAchievementBadges({ badgeModalHandler }: PropsType) {
  const state = useSelector((state: RootState) => state.reducer);

  //! 내가 가지고 있는 tag의 정보
  const myTagsInfo = state.userInfo.data?.data.userInfo.tags;
  const _myTagsId = myTagsInfo?.map((x) => x.tagId);

  //! 모든 테그의 정보
  const allTags = state.tags.data?.data;

  return (
    <div>
      <h1>MyAchievementBadges</h1>
      <div>
        <h3>모달 테스트</h3>
        <button onClick={badgeModalHandler}>뱃지선택</button>
      </div>
      <div style={{ color: 'red' }}>
        {
          //? 가지고 있는 테그들 렌더
          myTagsInfo?.map((badge) =>
            //? 선택했는지 확인
            !badge.isUsed ? (
              //? false일 확률이 더 높으니까 앞에
              //? 내가 선택하지 않은 테그 : 빨강글씨 테두리 없음
              <>
                <div key={badge.tagId} style={{ cursor: 'pointer' }}>
                  <div>
                    {badge.tagId},{badge.isUsed},{badge.tagName}
                  </div>
                  <div style={{ display: 'none' }}>{badge.description}</div>
                </div>
              </>
            ) : (
              //? 내가 선택한 테그 :테두리 파랑
              <div
                key={badge.tagId}
                style={{ border: '2px solid blue', cursor: 'pointer' }}
              >
                <div>
                  {badge.tagId},{badge.isUsed},{badge.tagName},
                  {badge.description}
                </div>
              </div>
            )
          )
        }
      </div>
      <div>
        <h3>내가 없는 테그들</h3>
        {
          //? 가지지 못한 테그들 렌더
          allTags?.tags.map(
            (badge) =>
              !_myTagsId?.includes(badge.id) && (
                <div>
                  <div>
                    {badge.id},{badge.tagName}
                  </div>
                  <div>{badge.description}</div>
                </div>
              )
          )
        }
      </div>
    </div>
  );
}

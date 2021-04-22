import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './MyAchievementBadges.scss';
import SpaceBox from './SpaceBox';

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
    <div id="MyAchievementBadges">
      <div className="title-button">
        <div>MyAchievementBadges</div>
        <button onClick={badgeModalHandler}>뱃지선택</button>
      </div>
      <div className="i-have-some-tags">
        <div>내가 있는 테그들</div>
        {
          //? 가지고 있는 테그들 렌더
          myTagsInfo?.map((badge) =>
            //? 선택했는지 확인
            !badge.isUsed ? (
              //? false일 확률이 더 높으니까 앞에
              //? 내가 선택하지 않은 테그 : 빨강글씨 테두리 없음
              <div key={badge.tagId} className="my-tags">
                <div className="tag">{badge.tagId}</div>
                <div>{badge.tagName}</div>
                <div>{badge.description}</div>
              </div>
            ) : (
              //? 내가 선택한 테그 :테두리 핫핑크
              <div key={badge.tagId} className="pick-my-tag">
                <div>{badge.tagId}</div>
                <div>{badge.tagName}</div>
                <div>{badge.description}</div>
              </div>
            )
          )
        }
      </div>
      <div className="i-dont-have-this-badges">
        <div className="not-my-tags">내가 없는 테그들</div>
        {
          //? 가지지 못한 테그들 렌더
          allTags?.tags.map(
            (badge) =>
              !_myTagsId?.includes(badge.id) && (
                <div className="not-my-tags">
                  <div>{badge.id}</div>
                  <div>{badge.tagName}</div>
                  <div>{badge.description}</div>
                </div>
              )
          )
        }
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBringUserInfoThunk } from '../../actions/actions';
import { patchEditTagsT } from '../../api/patchEditTag';
import { RootState } from '../../reducers';
import './styles/MyAchievementBadges.scss';

export default function MyAchievementBadges() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  //! 내가 가지고 있는 tag의 정보
  const myTagsInfo = state.userInfo.data?.data.userInfo.tags;
  const _myTagsId = myTagsInfo?.map((x) => x.tagId);

  //! 모든 테그의 정보
  const allTags = state.tags.data?.data;

  const accessToken = state.accessToken;
  const [tagId, setTagId] = useState('');

  const onClickHandler = (e: any) => {
    if (e.target.value) {
      setTagId(e.target.value);
    }
  };

  const onSubmitHandler = async () => {
    if (!tagId) return;
    if (accessToken) {
      await patchEditTagsT({ tagId: Number(tagId) }, accessToken)
        .then((x) => {
          dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
          setTagId('');
          console.log(x);
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div id="MyAchievementBadges">
      <div className="i-have-some-tags">
        <div className="title-button">
          <div className="i-have-some-tags-title">
            내 뱃지 : 사용할 뱃지를 선택하세요
          </div>
          <button onClick={onSubmitHandler} className="select-badge-button">
            선택완료
          </button>
        </div>
        {
          //? 가지고 있는 테그들 렌더
          myTagsInfo?.map((badge) =>
            //? 선택했는지 확인
            !badge.isUsed ? (
              //? false일 확률이 더 높으니까 앞에
              //? 내가 선택하지 않은 테그 : 빨강글씨 테두리 없음
              <>
                <label form="my-tags" onClick={onClickHandler}>
                  <input type="radio" name="chk_badge" value={badge.tagId} />
                  <div key={badge.tagId} className="my-tags">
                    <div className="my-tags-name-container">
                      <div id={'tag-id-'.concat(String(badge.tagId))}>
                        {badge.tagId}
                      </div>
                      <div className="my-tags-name">{badge.tagName}</div>
                    </div>
                    <div className="my-tags-description">
                      {badge.description}
                    </div>
                  </div>
                </label>
              </>
            ) : (
              //? 내가 선택한 테그 :테두리 핫핑크
              <label onClick={onClickHandler} defaultValue="1">
                <input type="radio" name="chk_badge" value={badge.tagId} />
                <div key={badge.tagId} className="pick-my-tag">
                  <div className="pick-my-tags-name-container">
                    <div id={'tag-id-'.concat(String(badge.tagId))}>
                      {badge.tagId}
                    </div>
                    <div className="pick-my-tags-name">{badge.tagName}</div>
                  </div>
                  <div
                    style={{ pointerEvents: 'none' }}
                    className="pick-my-tags-description"
                  >
                    {badge.description}
                  </div>
                </div>
              </label>
            )
          )
        }
      </div>
      <div className="i-dont-have-this-badges">
        <div className="i-dont-have-this-badges-title">내가 없는 뱃지들</div>
        {
          //? 가지지 못한 테그들 렌더
          allTags?.tags.map(
            (badge) =>
              !_myTagsId?.includes(badge.id) && (
                <div className="not-my-tags">
                  <div className="not-my-tag-name">
                    <div id={'tag-id-'.concat(String(badge.id))}>
                      {badge.id}
                    </div>
                    <div>{badge.tagName}</div>
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

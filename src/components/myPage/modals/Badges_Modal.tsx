import React, { MouseEventHandler, useEffect, useRef } from 'react';
import './Badges_Modal.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { patchEditTagsT } from '../../../api/patchEditTag';
import { postBringUserInfoThunk } from '../../../actions/actions';

interface Badges_ModalType {
  modal: boolean;
  setModal: any;
  badgeModalHandler: () => void;
}

export default function Badges_Modal({
  modal,
  setModal,
  badgeModalHandler,
}: Badges_ModalType) {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, [state]);

  console.log('userInfo:', state.userInfo.data?.data.userInfo);
  //! 요청보낼 tagId 저장소
  const [value, setValue] = useState('');

  //! 모든 테그의 정보
  const allTags = state.tags.data?.data;

  //! 내가 가지고 있는 tag의 정보
  const myTagsInfo = state.userInfo.data?.data.userInfo.tags;
  const _myTagsId = myTagsInfo?.map((x) => x.tagId);
  console.log(myTagsInfo);

  //! 내가 선택한 테그 정보 (아직 요청 보내기 전)
  const pickHandler = (e: any) => {
    setValue(e.target.textContent);
    console.log(e.target.textContent);
    console.log('value:', value);
    e.target.previousSibling.checked = !e.target.previousSibling.checked;
  };

  //! 내가 선택하거나, 선택한걸 뺴고싶은 요청
  const setUpBadgeHandler = async () => {
    if (!value) {
      return;
    }
    const tagId = Number(value.split(',')[0]);
    console.log('tagId:', tagId);

    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);

      await patchEditTagsT({ tagId }, accessToken)
        .then((x) => {
          dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
          setValue('');
          console.log(x);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <div id="badges_modal_container">
      <div className="badges_modal_contents">
        <h3 id="badges">Badges_Modal</h3>
        <div>선택할 뱃지 : {value}</div>
        <button onClick={setUpBadgeHandler}>설정완료</button>
        <button onClick={badgeModalHandler}>닫기</button>
        <div>
          <div>
            <h3>내가 가지고있는 테그들</h3>
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
                        <input type="radio" name="chk_badge" />
                        <div onClick={pickHandler}>
                          {badge.tagId},{badge.isUsed},{badge.tagName}
                        </div>
                        <div style={{ display: 'none' }}>
                          {badge.description}
                        </div>
                      </div>
                    </>
                  ) : (
                    //? 내가 선택한 테그 :테두리 파랑
                    <div
                      key={badge.tagId}
                      style={{ border: '2px solid blue', cursor: 'pointer' }}
                      onClick={pickHandler}
                    >
                      <input type="radio" name="chk_badge" />
                      <div>
                        {badge.tagId},{badge.isUsed},{badge.tagName},
                        {badge.description}
                      </div>
                    </div>
                  )
                )
              }
            </div>
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
      </div>
    </div>
  );
}

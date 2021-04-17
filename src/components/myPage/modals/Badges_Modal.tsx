import React, { MouseEventHandler, useEffect, useRef } from 'react';
import './Badges_Modal.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { patchEditTagsT } from '../../../api/patchEditTag';

interface Badges_ModalType {
  modal: boolean;
  setModal: any;
  modalHandler: () => void;
}

export default function Badges_Modal({
  modal,
  setModal,
  modalHandler,
}: Badges_ModalType) {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  console.log('userInfo:', state.userInfo.data?.data.userInfo);
  //! 요청보낼 tagId 저장소
  const [value, setValue] = useState('');

  //! 모든 테그의 정보
  const allTags = state.tags.data?.data;

  //! 내가 가지고 있는 tag의 정보
  const myTagsInfo = state.userInfo.data?.data.userInfo.tags;
  const _myTagsId = myTagsInfo?.map((x) => x.tagId);

  //! 내가 선택한 테그 정보 (아직 요청 보내기 전)
  const pickHandler = (e: any) => {
    setValue(e.target.textContent);

    e.target.previousSibling.checked = !e.target.previousSibling.checked;
    console.log(e.target.previousSibling.checked);
  };
  useEffect(() => {
    console.log('useEffect: ', value);
  }, [value]);

  //! 내가 선택하거나, 선택한걸 뺴고싶은 요청
  const setUpBadgeHandler = async () => {
    console.log('splitValue: ', value.split(',')[0]);
    const tagId = Number(value.split(',')[0]) || null;
    const _accessToken = '';

    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);

      await patchEditTagsT({ tagId }, accessToken)
        .then((x) => console.log(x, state))
        .catch((e) => console.log(e, state));
    }
  };
  return (
    <div id="badges_modal_container">
      <div className="badges_modal_contents">
        <h3 id="badges">Badges_Modal</h3>
        <button onClick={setUpBadgeHandler}>설정완료</button>
        <button onClick={modalHandler}>닫기</button>
        <div>
          <div>
            <h3>내가 가지고있는 테그들</h3>
            <div style={{ color: 'orange' }}>
              {
                //? 가지고 있는 테그들 렌더
                myTagsInfo?.map((badge) =>
                  //? 선택했는지 확인
                  !badge.isUsed ? (
                    //? false일 확률이 더 높으니까 앞에
                    //? 내가 선택하지 않은 테그 : 빨강테두리
                    <>
                      <div
                        key={badge.tagId}
                        style={{ border: '2px red solid', cursor: 'pointer' }}
                      >
                        <input type="radio" name="chk_badge" />
                        <div onClick={pickHandler}>
                          {badge.tagId},{badge.tagName}
                        </div>
                        <div style={{ display: 'none' }}>
                          {badge.description}
                        </div>
                      </div>
                      <div
                        key={badge.tagId}
                        style={{ border: '2px red solid', cursor: 'pointer' }}
                      >
                        <input type="radio" name="chk_badge" />
                        <div onClick={pickHandler}>
                          {badge.tagId},{badge.tagName}
                        </div>
                        <div style={{ display: 'none' }}>
                          {badge.description}
                        </div>
                      </div>
                      <div
                        key={badge.tagId}
                        style={{ border: '2px red solid', cursor: 'pointer' }}
                      >
                        <input type="radio" name="chk_badge" />
                        <div onClick={pickHandler}>
                          {badge.tagId},{badge.tagName}
                        </div>
                        <div style={{ display: 'none' }}>
                          {badge.description}
                        </div>
                      </div>
                    </>
                  ) : (
                    //? 내가 선택한 테그 : 파랑테두리
                    <div
                      key={badge.tagId}
                      style={{ border: '2px blue solid', cursor: 'pointer' }}
                    >
                      <div onClick={pickHandler}>
                        {badge.tagId},{badge.tagName}
                      </div>
                      <div style={{ display: 'none' }}>{badge.description}</div>
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

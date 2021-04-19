import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBringUserInfoThunk } from '../../../actions/actions';
import { delUserWithdrawalT } from '../../../api/delUserWithdrawal';
import { getLogoutT } from '../../../api/getLogout';
import { patchEditUserInfoT } from '../../../api/patchEditUserInfo';
import { RootState } from '../../../reducers';
import './MyInfo_Modal.css';
import Withdrawal_Modal from './Withdrawal_Modal';

interface MyIntroduction_ModalProps {
  myInfoModalHandler: () => void;
}

export default function MyInfo_Modal({
  myInfoModalHandler,
}: MyIntroduction_ModalProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  //? 서버에 저장되어있는 내 정보 3가지: 닉네임, 내사진, 내소개
  const nickName = state.userInfo.data?.data.userInfo.nickName || null;
  const myPhoto = state.userInfo.data?.data.userInfo.avatarUrl || null;
  const introduction = state.userInfo.data?.data.userInfo.introduction || null;

  //? state가 변경되면 state로 랜더된 부분 재렌더
  useEffect(() => {
    console.log(state);
  }, [state]);

  //! 회원탈퇴 관리 상태
  const [byeBye, setByeBye] = useState(false);
  const byeByeHandler = () => {
    setByeBye(!byeBye);
    console.log(byeBye);
  };
  const withdrawalHandler = () => {
    const accessToken = state.accessToken;
    if (accessToken) {
      delUserWithdrawalT(accessToken)
        .then((x) => {
          getLogoutT()
            .then((x) => {
              console.log(x);
              state.accessToken = '';
            })

            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    }
  };

  //? input 2개로 관리하는 변경하고 싶은 닉네임과 자기소개
  const [editMyInfo, setEditMyInfo] = useState({
    _nickName: '',
    _introduction: '',
  });
  console.log(editMyInfo);
  //? 임의 변경점 구조분해할당
  const { _nickName, _introduction } = editMyInfo;

  //? onChange 함수를 이용한 state 관리
  const onChangeEditMyInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEditMyInfo({
      ...editMyInfo,
      [name]: value,
    });
  };

  //? 자기소개 부분 submut 함수
  const onSubmitEditIntroduction = async (e: any) => {
    //? 아무것도 입력 안되어 있을떄 요청보내기 방지
    if (!_introduction) return;
    if (_introduction.length > 30) return alert('30자 이내로 작성해 주세요');
    e.preventDefault();
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      //? 변경사항 서버로 패치
      await patchEditUserInfoT(
        {
          avatarUrl: 'url',
          nickName: nickName,
          introduction: _introduction,
        },
        accessToken
      )
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
      //? 서버로 패치 끝나면 유저정보 새로 받아오고 디스패치
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
    }
    //? 자기소개 부분만 재설정
    setEditMyInfo({
      ...editMyInfo,
      _introduction: '',
    });
  };

  //? 위와같은 방식 닉네임 수정 함수
  const onSubmitEditNickName = async (e: any) => {
    //? 아무것도 입력안되어 있을때 쓸대없는 요청 방지
    if (!_nickName) return;
    if (_nickName.length > 10) return alert('10글자 이하로 입력해주세요');
    e.preventDefault();
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      await patchEditUserInfoT(
        {
          avatarUrl: 'url',
          nickName: _nickName,
          introduction: introduction,
        },
        accessToken
      )
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
    }
    setEditMyInfo({
      ...editMyInfo,
      _nickName: '',
    });
  };

  return (
    <div id="my_introduction_modal_container">
      <div className="my_introduction_modal_container">
        <h1>MyInfo_Modal</h1>
        <div>
          <div>
            {introduction ? introduction : '정보가 없습니다'}
            <input
              type="text"
              placeholder="자기소개 30글자 이내"
              name="_introduction"
              value={_introduction}
              onChange={onChangeEditMyInfo}
            />
            <button type="submit" onClick={onSubmitEditIntroduction}>
              submit
            </button>
          </div>
          <div>
            {nickName ? nickName : '정보가 없습니다'}
            <input
              type="text"
              placeholder="10글자 이하"
              name="_nickName"
              value={_nickName}
              onChange={onChangeEditMyInfo}
            />
            <button type="submit" onClick={onSubmitEditNickName}>
              submit
            </button>
          </div>
          <div>
            {myPhoto ? <div>img</div> : <div>기본이미지</div>}
            <button>edit</button>
          </div>
        </div>
        <button onClick={myInfoModalHandler}>close</button>
        <button onClick={byeByeHandler}>회원탈퇴</button>
        {byeBye && (
          <Withdrawal_Modal
            withdrawalHandler={withdrawalHandler}
            byeByeHandler={byeByeHandler}
          />
        )}
      </div>
    </div>
  );
}

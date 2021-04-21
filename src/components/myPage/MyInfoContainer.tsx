import React from 'react';
import MyIntroduction from './MyIntroduction';
import MyNickName from './MyNickName';
import MyPhoto from './MyPhoto';
import './MyInfoContainer.scss';

interface MyInfoContainerProps {
  myInfoModalHandler: () => void;
}

export default function MyInfoContainer({
  myInfoModalHandler,
}: MyInfoContainerProps) {
  return (
    <div id="MyInfoContainer">
      <div className="photo-nickname-intro-container">
        <div>
          <MyPhoto />
        </div>
        <div className="my-info-nickname-intro-container">
          <MyNickName />
          <MyIntroduction />
        </div>
      </div>
      <button onClick={myInfoModalHandler}>수정하기</button>
    </div>
  );
}

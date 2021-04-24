import React from 'react';
import MyIntroduction from './MyIntroduction';
import MyNickName from './MyNickName';
import MyPhoto from './MyPhoto';
import './styles/MyInfoContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

interface MyInfoContainerProps {
  myInfoModalHandler: () => void;
}

const setIcon = <FontAwesomeIcon icon={faCog} />;

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
      <div className="set-button" onClick={myInfoModalHandler}>
        {setIcon}
      </div>
    </div>
  );
}

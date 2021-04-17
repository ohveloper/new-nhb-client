import React from 'react';
import MyAchievementBadges from './MyAchievementBadges';
import MyAchievementLight from './MyAchievementLight';
import MyAchievementStars from './MyAchievementStars';
interface PropsType {
  modalHandler: () => void;
}

export default function MyAchievementContainer({ modalHandler }: PropsType) {
  return (
    <div>
      <h1>MyAchievementContainer</h1>
      <div>
        <MyAchievementBadges modalHandler={modalHandler} />
        <MyAchievementLight />
        <MyAchievementStars />
      </div>
    </div>
  );
}

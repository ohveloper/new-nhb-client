import React from 'react';
import MyAchievementBadges from './MyAchievementBadges';
import MyAchievementLight from './MyAchievementLight';
import MyAchievementStars from './MyAchievementStars';
interface PropsType {
  badgeModalHandler: () => void;
}

export default function MyAchievementContainer({
  badgeModalHandler,
}: PropsType) {
  return (
    <div>
      <h1>MyAchievementContainer</h1>
      <div>
        <MyAchievementBadges badgeModalHandler={badgeModalHandler} />
        <MyAchievementLight />
        <MyAchievementStars />
      </div>
    </div>
  );
}

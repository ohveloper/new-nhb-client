import React from 'react';
import MyAchievementBadges from './MyAchievementBadges';
import MyAchievementLight from './MyAchievementLight';
import MyAchievementStars from './MyAchievementStars';

export default function MyAchievementContainer() {
  return (
    <div>
      <h1>MyAchievementContainer</h1>
      <div>
        {/* <MyAchievementBadges /> */}
        <MyAchievementLight />
        <MyAchievementStars />
      </div>
    </div>
  );
}

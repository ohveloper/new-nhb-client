import React, { useEffect } from 'react';
import MyAchievementBadges from './MyAchievementBadges';
import MyAchievementStars from './MyAchievementStars';
import MyAchievementApt from './MyAchievementApt';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
interface PropsType {
  badgeModalHandler: () => void;
}

export default function MyAchievementContainer({
  badgeModalHandler,
}: PropsType) {
  const state = useSelector((state: RootState) => state.reducer);
  return (
    <div>
      <h1>MyAchievementContainer</h1>
      <div>
        <MyAchievementBadges badgeModalHandler={badgeModalHandler} />
        <MyAchievementApt />
        <MyAchievementStars />
      </div>
    </div>
  );
}

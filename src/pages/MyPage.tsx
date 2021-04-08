import React from 'react';
import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyWorkContainer from '../components/myPage/MyWorkContainer';

export default function MyPage() {
  return (
    <>
      <div>
        <MyWorkContainer />
      </div>
      <div>
        <MyAchievementContainer />
      </div>
    </>
  );
}

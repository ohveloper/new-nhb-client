import MyAchievementBadges from './MyAchievementBadges';
import MyAchievementStars from './MyAchievementStars';
import MyAchievementApt from './MyAchievementApt';

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
        <MyAchievementApt />
        <MyAchievementStars />
      </div>
    </div>
  );
}

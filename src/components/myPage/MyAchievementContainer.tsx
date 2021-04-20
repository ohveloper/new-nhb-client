import MyAchievementBadges from './MyAchievementBadges';
import MyAchievementStars from './MyAchievementStars';
import MyAchievementApt from './MyAchievementApt';
import './MyAchievementContainer.scss';

interface PropsType {
  badgeModalHandler: () => void;
}

export default function MyAchievementContainer({
  badgeModalHandler,
}: PropsType) {
  return (
    <div id="MyAchievementContainer">
      <h1>MyAchievementContainer</h1>
      <div>
        <MyAchievementBadges badgeModalHandler={badgeModalHandler} />
        <MyAchievementApt />
        <MyAchievementStars />
      </div>
    </div>
  );
}

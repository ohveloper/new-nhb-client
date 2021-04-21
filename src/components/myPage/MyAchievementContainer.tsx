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
      <div>MyAchievementContainer</div>
      <div>
        <MyAchievementBadges badgeModalHandler={badgeModalHandler} />
        <MyAchievementApt />
        <MyAchievementStars />
      </div>
    </div>
  );
}

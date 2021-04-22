import MyAchievementBadges from './MyAchievementBadges';
import MyAchievementStars from './MyAchievementStars';
import MyAchievementApt from './MyAchievementApt';
import './MyAchievementContainer.scss';
import SpaceBox from './SpaceBox';

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
        <SpaceBox />
        <MyAchievementApt />
        <SpaceBox />
        <MyAchievementStars />
        <SpaceBox />
      </div>
    </div>
  );
}

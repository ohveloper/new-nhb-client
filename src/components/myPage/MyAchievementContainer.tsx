import MyAchievementBadges from './MyAchievementBadges';
import MyAchievementStars from './MyAchievementStars';
import MyAchievementApt from './MyAchievementApt';
import './styles/MyAchievementContainer.scss';
import SpaceBox from './SpaceBox';

export default function MyAchievementContainer() {
  return (
    <div id="MyAchievementContainer">
      <div>MyAchievementContainer</div>
      <div>
        <MyAchievementBadges />
        <SpaceBox />
        <MyAchievementApt />
        <SpaceBox />
        <MyAchievementStars />
        <SpaceBox />
      </div>
    </div>
  );
}

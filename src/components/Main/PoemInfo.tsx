import '../../styles/mainPage.css';
import '../myPage/styles/MyAchievementBadges.scss';

type PoemInfoProps = {
  userTag: string;
  nickName: string;
  createdAt: string;
};

export default function PoemInfo({
  userTag,
  nickName,
  createdAt,
}: PoemInfoProps) {
  console.log(userTag);
  return (
    <div className="poem-info">
      <div className="tag-container">
        <div id={'tag-id-'.concat(userTag)}></div>
      </div>
      <span className="nick-name">{nickName}</span>
    </div>
  );
}

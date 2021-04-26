import '../../styles/mainPage.css';

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
        <div id={'tag-'.concat(userTag)}></div>
      </div>
      <span className="nick-name">{nickName}</span>
    </div>
  );
}

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
  return (
    <div className="poem-info">
      <div>
        <span className="tag">({userTag})</span>
        <span className="nick-name">{nickName}</span>
      </div>
    </div>
  );
}

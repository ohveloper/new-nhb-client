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
        ({userTag}) {nickName}
      </div>
    </div>
  );
}

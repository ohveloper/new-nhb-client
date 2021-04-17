import { Welcome } from '../../reducers/reducer';

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
    <>
      <div>
        ({userTag}) {nickName}
      </div>
    </>
  );
}

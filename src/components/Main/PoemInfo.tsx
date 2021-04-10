import { UserFeed } from '../../reducers/initialState';

type PoemInfoProps = {
  userFeed: UserFeed;
};

export default function PoemInfo({ userFeed }: PoemInfoProps) {
  const { user, createdAt } = userFeed;
  return (
    <>
      <div>
        ({user.tag}) {user.nickName} [{createdAt}]
      </div>
    </>
  );
}

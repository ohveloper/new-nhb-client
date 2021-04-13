import { UserFeeds } from '../../reducers/poemReducer';

type PoemInfoProps = {
  userFeeds: UserFeeds;
};

export default function PoemInfo({ userFeeds }: PoemInfoProps) {
  const { user, createdAt } = userFeeds;
  return (
    <>
      <div>
        ({user.tag}) {user.nickName} [{createdAt}]
      </div>
    </>
  );
}

import { UserFeeds } from '../../reducers/poemReducer';

type PoemButtonGroupProps = {
  userFeeds: UserFeeds;
};

export default function PoemButtonGroup({ userFeeds }: PoemButtonGroupProps) {
  const { likes, comments } = userFeeds;
  return (
    <>
      <div>
        [likes] {likes} &nbsp; [comments] {comments} &nbsp; [share]
      </div>
    </>
  );
}

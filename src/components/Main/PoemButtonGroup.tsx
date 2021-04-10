import { UserFeed } from '../../reducers/initialState';

type PoemButtonGroupProps = {
  userFeed: UserFeed;
};

export default function PoemButtonGroup({ userFeed }: PoemButtonGroupProps) {
  const { likes, comments } = userFeed;
  return (
    <>
      <div>
        [likes] {likes} &nbsp; [comments] {comments} &nbsp; [share]
      </div>
    </>
  );
}

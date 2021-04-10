import { UserFeed } from '../../reducers/initialState';

type PoemViewProps = {
  userFeed: UserFeed;
};

export default function PoemView({ userFeed }: PoemViewProps) {
  return (
    <>
      {userFeed.content.map((line) => {
        const head = line.slice(0, 1);
        const tail = line.slice(1);
        return (
          <div key={userFeed.feedId}>
            {head} : {tail}
          </div>
        );
      })}
    </>
  );
}

import { UserFeed } from '../../reducers/initialState';

type PoemViewProps = {
  userFeed: UserFeed;
};

export default function PoemView({ userFeed }: PoemViewProps) {
  return (
    <>
      {userFeed.content.map((line, idx) => {
        const head = line.slice(0, 1);
        const tail = line.slice(1);
        const key = String(idx) + String(userFeed.feedId);
        return (
          <div key={key}>
            {head} : {tail}
          </div>
        );
      })}
    </>
  );
}

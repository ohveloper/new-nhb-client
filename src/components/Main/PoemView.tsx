import { UserFeeds } from '../../reducers/poemReducer';

type PoemViewProps = {
  userFeeds: UserFeeds;
};

export default function PoemView({ userFeeds }: PoemViewProps) {
  return (
    <>
      {userFeeds.content.map((line, idx) => {
        const head = line.slice(0, 1);
        const tail = line.slice(1);
        const key = String(idx) + String(userFeeds.feedId);
        return (
          <div key={key}>
            {head} : {tail}
          </div>
        );
      })}
    </>
  );
}

import { RootState } from '../../reducers';
import { useSelector } from 'react-redux';

export default function PoemView() {
  const state = useSelector((state: RootState) => state.getInfoReducer);
  const { userFeeds } = state;
  return (
    <>
      {userFeeds.map((feed) => {
        feed.content.map((line, idx) => {
          const head = line.slice(0, 1);
          const tail = line.slice(1);
          const key = String(idx) + String(feed.feedId);
          return (
            <div key={key}>
              {head} : {tail}
            </div>
          );
        });
      })}
    </>
  );
}

import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function PoemButtonGroup() {
  const state = useSelector((state: RootState) => state.reducer);
  const { data } = state.userFeeds;

  return (
    <>
      {data?.userFeeds.map((feed) => {
        <div key={feed.feedId}>
          [likes] {feed.likes} &nbsp; [comments] {feed.comments} &nbsp; [share]
        </div>;
      })}
    </>
  );
}

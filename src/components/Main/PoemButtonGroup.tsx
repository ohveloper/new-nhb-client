import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function PoemButtonGroup() {
  const state = useSelector((state: RootState) => state.reducer);
  const { data } = state.userFeeds;

  return (
    <>
      {data?.data.userFeeds.map((feed) => {
        <div key={feed.feedId}>
          [likes] {feed.likeNum} &nbsp; [comments] {feed.commentNum} &nbsp;
          [share]
        </div>;
      })}
    </>
  );
}

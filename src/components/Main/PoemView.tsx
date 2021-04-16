import { RootState } from '../../reducers';
import { useSelector } from 'react-redux';

type poemViewProps = {
  poem: any;
  isLoading: boolean;
};

export default function PoemView({ poem, isLoading }: poemViewProps) {
  const state = useSelector((state: RootState) => state.reducer);
  const userFeeds = state.userFeeds.data?.data.userFeeds;
  console.log('poemView:', poem);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {poem.data.userFeeds.map((feed: any) => {
        return (
          <div key={feed.feedId}>
            <div>{feed.feedId}</div>
            <div>
              {feed.content.map((word: string, idx: number) => {
                const head = word.slice(0, 1);
                // const tail = word.slice(1);
                const key = String(idx) + String(feed.feedId);
                return (
                  <div key={key}>
                    [{head}]{word}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

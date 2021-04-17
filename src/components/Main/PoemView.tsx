import { Welcome } from '../../reducers/reducer';
import PoemInfo from './PoemInfo';
import PoemButtonGroup from './PoemButtonGroup';

type poemViewProps = {
  poem: Welcome;
  isLoading: boolean;
};

export default function PoemView({ poem, isLoading }: poemViewProps) {
  const { userFeeds } = poem.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {userFeeds.map((feed) => {
        return (
          <div key={feed.feedId}>
            <div>{feed.feedId}</div>
            <PoemInfo
              userTag={feed.user.tag}
              nickName={feed.user.nickName}
              createdAt={feed.createdAt}
            />
            <div>
              {feed.content.map((word, idx) => {
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
            <PoemButtonGroup
              likeNum={feed.likeNum}
              commentNum={feed.commentNum}
            />
          </div>
        );
      })}
    </>
  );
}

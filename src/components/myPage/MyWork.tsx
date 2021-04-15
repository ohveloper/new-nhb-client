import { Welcome } from '../../reducers/reducer';

export default function MyWork({ userFeeds }: Welcome) {
  return (
    <>
      <h1>MyWork</h1>
      <div>
        {userFeeds.map((x, idx) => (
          <div>
            <p key={idx}>{x.content}</p>
            <div>댓글 수 : {x.commentNum}</div>
            <div>좋아요 수 : {x.likeNum}</div>
          </div>
        ))}
      </div>
    </>
  );
}

import { PrivateFeed } from '../../reducers/initialState';

type privateFeedProps = {
  privateFeed: PrivateFeed;
};

export default function MyWork({ privateFeed }: privateFeedProps) {
  const topics = privateFeed.topic.split('');
  console.log(topics);
  const { content } = privateFeed;
  console.log(content);
  return (
    <>
      <h1>MyWork</h1>
      //! 유저네임 필요한가??
      <div>유저 네임 : {privateFeed.user.nickName}</div>
      //! 필요한가?? 뱃지이름이??
      <div>착용중인 뱃지 이름 : {privateFeed.user.tag}</div>
      <div>
        {content.map((x, idx) => (
          <p>
            {topics[idx]}: {x}
          </p>
        ))}
      </div>
      <div>댓글 수 : {privateFeed.comments}</div>
      <div>좋아요 수 : {privateFeed.likes}</div>
    </>
  );
}

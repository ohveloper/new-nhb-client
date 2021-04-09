import { PrivateFeed } from '../../modules/getInfo';

type privateFeedProps = {
  privateFeed: PrivateFeed;
};

export default function MyWork({ privateFeed }: privateFeedProps) {
  console.log('보여줘', privateFeed);
  return (
    <>
      <h1>MyWork</h1>
      <div>유저 네임 : {privateFeed.user.nickName}</div>
      <div>착용중인 뱃지 이름 : {privateFeed.user.tag}</div>
      <div>
        {/* 작성한시 :{' '}
        {privateFeeds.content.map((x: {} | null | undefined) => (
          <p key={x}>{x}</p>
        ))} */}
      </div>
      <div>댓글 수 : {privateFeed.comments}</div>
      <div>좋아요 수 : {privateFeed.likes}</div>
    </>
  );
}

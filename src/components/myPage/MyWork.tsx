import { RootState } from '../../modules';
import { PrivateFeed } from '../../modules/getInfo';

interface MyWorkProps {
  x: string;
  privateFeeds: PrivateFeed;
}

export default function MyWork({ x, privateFeeds }: any) {
  return (
    <div>
      <h1>MyWork Redux</h1>
      <div>유저 네임 : {privateFeeds[x].user.nickName}</div>
      <div>착용중인 뱃지 이름 : {privateFeeds[x].user.tag}</div>
      <div>작성한시 : {privateFeeds[x].content}</div>
      <div>댓글 수 : {privateFeeds[x].comments}</div>
      <div>좋아요 수 : {privateFeeds[x].likes}</div>
    </div>
  );
}

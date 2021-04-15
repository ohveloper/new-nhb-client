import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function PoemInfo() {
  const state = useSelector((state: RootState) => state.reducer);
  const { data } = state.userFeeds;
  const users = data?.userFeeds.map((feed) => feed.user);
  // const users = userFeeds.map((feed) => feed.user);
  const createdAt = data?.userFeeds.map((feed) => feed.createdAt);
  return (
    <>
      {users?.map((user) => {
        <div key={user.userId}>
          {user.tag} {user.nickName} [{createdAt}]
        </div>;
      })}
    </>
  );
}

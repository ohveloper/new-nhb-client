import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function PoemInfo() {
  const state = useSelector((state: RootState) => state.getInfoReducer);
  const { userFeeds } = state;
  const users = userFeeds.map((feed) => feed.user);
  const createdAt = userFeeds.map((feed) => feed.createdAt);

  return (
    <>
      {users.map((user) => {
        <div key={user.userId}>
          {user.tag} {user.nickName} [{createdAt}]
        </div>;
      })}
    </>
  );
}

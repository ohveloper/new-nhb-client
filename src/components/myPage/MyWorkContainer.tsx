import { useSelector } from 'react-redux';

import { RootState } from '../../reducers';
import MyWork from './MyWork';

export default function MyWorkContainer() {
  const state = useSelector((state: RootState) => state.reducer);

  return (
    <div>
      <h1>MyWorkContainer</h1>
      {state.privateFeeds.loading && 'now loading..'}
      {state.privateFeeds.error && 'now ERROR'}
      {state.privateFeeds.data ? <MyWork /> : '내 글이 없습니다'}
    </div>
  );
}

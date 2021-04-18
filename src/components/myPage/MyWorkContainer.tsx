import { useSelector } from 'react-redux';

import { RootState } from '../../reducers';
import MyWork from './MyWork';

export default function MyWorkContainer() {
  const state = useSelector((state: RootState) => state.reducer);
  const privateFeeds = state.privateFeeds.data?.data;

  return (
    <div>
      <h1>MyWorkContainer</h1>
      {privateFeeds ? <MyWork /> : '데이터가 없습니다'}
    </div>
  );
}

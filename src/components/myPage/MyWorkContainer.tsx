import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../reducers';
import MyWork from './MyWork';

export default function MyWorkContainer() {
  const state = useSelector((state: RootState) => state.reducer);
  return (
    <div>
      <h1>MyWorkContainer</h1>
      {!state.userFeeds.data ? (
        '데이터가 없습니다'
      ) : state.userFeeds.data.userFeeds ? (
        <MyWork userFeeds={state.userFeeds.data.userFeeds} />
      ) : (
        '데이터가 없습니다'
      )}
    </div>
  );
}

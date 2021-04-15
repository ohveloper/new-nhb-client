import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  postBringFeedsThunk,
  postGetUserFeedsThunk,
} from '../../actions/actions';
import { RootState } from '../../reducers';
import MyWork from './MyWork';

export default function MyWorkContainer() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  return (
    <div>
      {state.userFeeds.data && (
        <MyWork userFeeds={state.userFeeds.data.userFeeds} />
      )}
    </div>
  );
}

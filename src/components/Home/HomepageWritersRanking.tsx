import React from 'react';
import { getUserLiveRankT } from '../../api/getUserLiveRanking';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { getRankThunk } from '../../actions/actions';

export default function HomepageWritersRanking() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  dispatch(getRankThunk());

  return;
}

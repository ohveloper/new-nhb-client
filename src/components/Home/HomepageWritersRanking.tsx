import React from 'react';
import { getUserLiveRankingT } from '../../api/getUserLiveRanking';
import { useDispatch } from 'react-redux';

export default function HomepageWritersRanking() {
  const dispatch = useDispatch();
  dispatch(getUserLiveRankingT());

  return 
}

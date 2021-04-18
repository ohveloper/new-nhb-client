import React from 'react';
import { getUserLiveRankT } from '../../api/getUserLiveRanking';
import { useDispatch } from 'react-redux';

export default function HomepageWritersRanking() {
  const dispatch = useDispatch();
  void dispatch(getUserLiveRankT());

  return;
}

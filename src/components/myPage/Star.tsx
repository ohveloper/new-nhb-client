import { start } from 'node:repl';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './Star.scss';

export default function Star() {
  const state = useSelector((state: RootState) => state.reducer);
  const stars = state.userInfo.data?.data.userInfo.userLikeNum;
  const starsArr = [...new Array(stars).keys()];
  console.log(starsArr, 'stars');

  return (
    <div className="star-box">
      {starsArr.map((x) => (
        <div className="star"></div>
      ))}
    </div>
  );
}

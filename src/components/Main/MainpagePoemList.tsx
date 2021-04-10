import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { newFeed } from '../../reducers/initialState';
import MainpagePoemContainer from './MainpagePoemContainer';

export default function MainpagePoemList() {
  const poemReducer = useSelector((state: RootState) => state.poemReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h1>MainpagePoemList</h1>
      <MainpagePoemContainer />
    </>
  );
}

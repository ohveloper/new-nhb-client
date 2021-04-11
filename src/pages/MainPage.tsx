import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPoem } from '../actions/poemActions';
import { RootState } from '../reducers';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import MainpagePoemList from '../components/Main/MainpagePoemList';
import { newFeed } from '../reducers/initialState';

export default function MainPage() {
  const poemReducer = useSelector((state: RootState) => state.poemReducer);
  const dispatch = useDispatch();

  const onPoemInsert = (newFeed: newFeed) => {
    dispatch(createPoem(newFeed));
  };

  return (
    <>
      <div>[MainPage]</div>
      <MainpagePoemInput onPoemInsert={onPoemInsert} />
      <MainpagePoemList />
    </>
  );
}

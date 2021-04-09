import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPoem } from '../actions/poemActions';
import { RootState } from '../modules';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import { newFeed } from '../reducers/initialState';

export default function MainPage() {
  // TODO: 글 출력할 feed 컴포넌트 만들기
  const poemReducer = useSelector((state: RootState) => state.poemReducer);
  const dispatch = useDispatch();

  const onPoemInsert = (newFeed: newFeed) => {
    dispatch(createPoem(newFeed));
  };

  return (
    <>
      <div>MainPage</div>
      <MainpagePoemInput onPoemInsert={onPoemInsert} />
    </>
  );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPoem } from '../actions/poemActions';
import { RootState } from '../reducers';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import MainpagePoemList from '../components/Main/MainpagePoemList';
import { UserFeed } from '../reducers/initialState';

export default function MainPage() {
  const userFeeds = useSelector(
    (state: RootState) => state.poemReducer.userFeeds
  );
  const dispatch = useDispatch();

  const onPoemInsert = (newFeed: UserFeed) => {
    dispatch(createPoem(newFeed));
    console.log(newFeed);
  };

  return (
    <>
      <div>[MainPage]</div>
      <MainpagePoemInput onPoemInsert={onPoemInsert} />
      <MainpagePoemList userFeeds={userFeeds} />
    </>
  );
}

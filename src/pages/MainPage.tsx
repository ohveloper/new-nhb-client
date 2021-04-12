import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postCreatePoemThunk } from '../actions/poemActions';
import { RootState } from '../reducers';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import MainpagePoemList from '../components/Main/MainpagePoemList';
import { UserFeeds } from '../reducers/poemReducer';
import { Content } from '../api/postCreatePoem';

export default function MainPage() {
  const userFeeds = useSelector((state: RootState) => state.poemReducer);
  const dispatch = useDispatch();
  console.log(userFeeds);

  const onPoemInsert = (feed: Content) => {
    dispatch(postCreatePoemThunk(feed));
    console.log(feed);
  };

  return (
    <>
      <div>[MainPage]</div>
      <MainpagePoemInput onPoemInsert={onPoemInsert} />
      <MainpagePoemList userFeeds={userFeeds} />
    </>
  );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postCreatePoemThunk } from '../actions/poemActions';
import { RootState } from '../reducers';
import MainpagePoemInput from '../components/Main/MainpagePoemInput';
import MainpagePoemList from '../components/Main/MainpagePoemList';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';
import { Content } from '../api/postUploadFeed';

export default function MainPage() {
  const userFeeds = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  console.log('userFeeds:', userFeeds);

  const onPoemInsert = (feed: Content) => {
    const _accessToken = '';
    if (userFeeds.accessToken) {
      const accessToken = _accessToken.concat(userFeeds.accessToken);
      dispatch(postCreatePoemThunk(feed, accessToken));
      console.log('feed:', feed);
    }
  };

  return (
    <>
      <Homebutton />
      <Sidebar />
      <div>[MainPage]</div>
      <MainpagePoemInput onPoemInsert={onPoemInsert} />
      <MainpagePoemList />
    </>
  );
}

import React, { useEffect } from 'react';
import { UserFeed } from '../../reducers/initialState';
import MainpagePoemContainer from './MainpagePoemContainer';

type MainpagePoemContainerProps = {
  userFeeds: UserFeed[];
};
export default function MainpagePoemList({
  userFeeds,
}: MainpagePoemContainerProps) {
  return (
    <>
      <h1>MainpagePoemList</h1>
      <MainpagePoemContainer userFeeds={userFeeds} />
    </>
  );
}

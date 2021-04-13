import React, { useEffect } from 'react';
import { UserFeeds } from '../../reducers/poemReducer';
import MainpagePoemContainer from './MainpagePoemContainer';

type MainpagePoemContainerProps = {
  userFeeds: UserFeeds[];
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

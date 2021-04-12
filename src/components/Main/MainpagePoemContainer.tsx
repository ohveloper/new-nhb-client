import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import PoemInfo from './PoemInfo';
import PoemView from './PoemView';
import PoemButtonGroup from './PoemButtonGroup';
import { UserFeeds } from '../../reducers/poemReducer';

type MainpagePoemContainerProps = {
  userFeeds: UserFeeds[];
};

export default function MainpagePoemContainer({
  userFeeds,
}: MainpagePoemContainerProps) {
  if (userFeeds.length === 0) {
    return <div>오늘 첫 글의 주인공이 되어 볼까요?😉</div>;
  }
  return (
    <>
      <h2>PoemContainer</h2>
      {userFeeds.map((feed, idx) => {
        const key = String(feed.feedId) + String(idx);
        return (
          <div key={key}>
            {feed.feedId}
            <PoemInfo userFeeds={feed} />
            <PoemView userFeeds={feed} />
            <PoemButtonGroup userFeeds={feed} />
          </div>
        );
      })}
    </>
  );
}

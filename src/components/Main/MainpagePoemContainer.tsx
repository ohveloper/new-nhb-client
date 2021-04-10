import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import PoemInfo from './PoemInfo';
import PoemView from './PoemView';
import PoemButtonGroup from './PoemButtonGroup';

export default function MainpagePoemContainer() {
  const state = useSelector((state: RootState) => state.poemReducer);

  return (
    <>
      <h2>PoemContainer</h2>
      {state.userFeeds.map((info, idx) => {
        return (
          <>
            <div key={idx}>
              {idx}
              <PoemInfo userFeed={info} />
              <PoemView userFeed={info} />
              <PoemButtonGroup userFeed={info} />
            </div>
          </>
        );
      })}
    </>
  );
}

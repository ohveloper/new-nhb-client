import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { postGetUserAptInfoThunk } from '../../actions/actions';
import { RootState } from '../../reducers';
import './MyAchievementApt.scss';

export default function MyAchievementApt() {
  const state = useSelector((state: RootState) => state.reducer);
  const aptLight = state.apartment.data?.data.apartment;
  const userId = state.userInfo.data?.data.userInfo.userId;
  useEffect(() => {
    if (userId) {
      postGetUserAptInfoThunk({ userId });
    }
  }, [state]);
  return (
    <div id="MyAchievementApt">
      <h1>MyAchievementApt</h1>
      <div>
        {state.apartment.loading && 'now loading...'}
        {state.apartment.error && 'sorry now error'}
        {state.apartment.data &&
          aptLight?.map((week) => (
            <div>
              {week.map((day, idx) =>
                day.date === null ? (
                  <></>
                ) : day.feedNum === null ? (
                  <div key={idx} className="i-didnt-get-feed">
                    <div style={{ display: 'none' }}>
                      {day.feedNum}
                      {day.date}
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="i-got-feed">
                    <div style={{ display: 'none' }}>
                      {day.feedNum},{day.date}
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

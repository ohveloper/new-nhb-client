import { useEffect, useState } from 'react';
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
  console.log(aptLight);
  if (aptLight) {
    console.log(aptLight[0][0].date.split('-'));
  }
  const [weekList, setWeeklist] = useState([]);
  return (
    <div id="MyAchievementApt">
      <h1>MyAchievementApt</h1>
      {/* //? day 맵을 돌릴때 2021-04-01 을 만나면 push를 한다 */}
      <div>여긴가</div>
      <div className="apt-container">
        {state.apartment.loading && 'now loading...'}
        {state.apartment.error && 'sorry now error'}
        {state.apartment.data &&
          aptLight?.map((week) => (
            <div className="apt-weekly-container">
              {week.map((day, idx) =>
                day.date === null ? (
                  <></>
                ) : day.feedNum === null ? (
                  <div
                    key={idx}
                    style={{
                      width: '10px',
                      height: '10px',
                      border: '2px solid pink',
                    }}
                  >
                    <div style={{ display: 'none' }}>
                      {day.feedNum}
                      {day.date}
                    </div>
                  </div>
                ) : (
                  <div
                    key={idx}
                    style={{
                      width: '10px',
                      height: '10px',
                      border: '2px solid pink',
                      backgroundColor: 'red',
                    }}
                  >
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

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
      <div>MyAchievementApt</div>
      {/* //? day 맵을 돌릴때 2021-04-01 을 만나면 push를 한다 */}
      <div>여기는 월별 들어가야됨</div>
      <div className="apt-container">
        <div className="apt-week">
          <div>월</div>
          <div>화</div>
          <div>목</div>
          <div>토</div>
        </div>
        {state.apartment.loading && 'now loading...'}
        {state.apartment.error && 'sorry now error'}
        {state.apartment.data &&
          aptLight?.map((week) => (
            <div className="apt-weekly-container">
              {week.map((day, idx) =>
                day.date === null ? (
                  <></>
                ) : day.feedNum === null ? (
                  <div className="apt-light-none" key={idx}>
                    <div style={{ display: 'none' }}>
                      {day.feedNum}
                      {day.date}
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="apt-light">
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

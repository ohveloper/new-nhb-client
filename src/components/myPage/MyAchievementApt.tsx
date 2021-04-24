import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { postGetUserAptInfoThunk } from '../../actions/actions';
import { RootState } from '../../reducers';
import './styles/MyAchievementApt.scss';
import SpaceBox from './SpaceBox';

export default function MyAchievementApt() {
  const state = useSelector((state: RootState) => state.reducer);
  const aptLight = state.apartment.data?.data.apartment;
  const userId = state.userInfo.data?.data.userInfo.userId;
  useEffect(() => {
    if (userId) {
      postGetUserAptInfoThunk({ userId });
    }
    const aptBox = document.getElementById('apt-container');
    if (aptBox) {
      aptBox.scrollLeft = aptBox.scrollWidth;
    }
  }, [state]);

  return (
    <div id="MyAchievementApt">
      <div title="헬로">MyAchievementApt</div>
      {/* //? day 맵을 돌릴때 2021-04-01 을 만나면 push를 한다 */}
      <div className="apt-container" id="apt-container">
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
                    <div className="apt-hide-info">{day.date}</div>
                  </div>
                ) : (
                  <div title={day.date} key={idx} className="apt-light">
                    <div className="apt-hide-info">{day.date}</div>
                  </div>
                )
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

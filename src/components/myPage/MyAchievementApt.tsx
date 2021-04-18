import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

export default function MyAchievementApt() {
  const state = useSelector((state: RootState) => state.reducer);
  console.log('apt:', state);
  const aptLight = state.apartment.data?.data.apartment;
  return (
    <div>
      <h1>MyAchievementApt</h1>
      <div>
        {state.apartment.loading && 'now loading...'}
        {state.apartment.error && 'sorry now error'}
        {state.apartment.data &&
          aptLight?.map((week) =>
            week.map((day, idx) =>
              day.feedNum === null ? (
                day.date === null ? ( //? date가 null이면 출력 출력안함
                  <></>
                ) : (
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      border: '2px solid pink',
                    }}
                  >
                    <div key={day.date} style={{ display: 'none' }}>
                      {day.feedNum}
                      {day.date}
                    </div>
                  </div>
                )
              ) : (
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    display: 'inline-block',
                    border: '2px solid pink',
                    backgroundColor: 'red',
                  }}
                >
                  <div key={day.date} style={{ display: 'none' }}>
                    {day.feedNum},{day.date}
                  </div>
                </div>
              )
            )
          )}
      </div>
    </div>
  );
}

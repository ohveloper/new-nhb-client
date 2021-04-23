import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { getRankThunk } from '../../actions/actions';

export default function HomepageWritersRanking() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const { data } = state.rank;
  const { loading } = state.rank;
  const rank = data?.data;

  useEffect(() => {
    dispatch(getRankThunk());
  }, []);

  return (
    <>
      <div>
        실시간 인기 작가
        {loading
          ? `"N행시의 밤" 최고의 작가분들을 모셔오는 중`
          : rank?.rank.map((popular, idx) => {
              return (
                <div key={popular.userId}>
                  <div>
                    {idx + 1}위! {popular.nickName}님
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}

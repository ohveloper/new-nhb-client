import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { getRankThunk } from '../../actions/actions';

export default function HomepagePoemsRanking() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const { data } = state.rank;
  const rank = data?.data;

  console.log('rank :', rank?.rank);

  useEffect(() => {
    dispatch(getRankThunk());
  }, []);

  return (
    <>
      <div>실시간 인기작가 </div>
      {rank?.rank.map((popular, idx) => {
        return (
          <div key={popular.userId}>
            <div>
              {idx + 1}위! {popular.nickName}님
            </div>
          </div>
        );
      })}
    </>
  );
}

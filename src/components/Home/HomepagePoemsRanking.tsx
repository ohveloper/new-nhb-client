import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { getRankThunk } from '../../actions/actions';
import { data } from '../../reducers/reducer';

// type poemRankProps = {
//   poem: PoemRank;
// };

export default function HomepagePoemsRanking() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();

  const { data } = state.rank.data;
  useEffect(() => {
    dispatch(getRankThunk());
  }, []);

  // const { rank } = feedsRank;

  console.log('feedRank : ', { data: data });

  return <div>실시간 인기글 </div>;
}

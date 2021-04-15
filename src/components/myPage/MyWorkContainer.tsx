import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postGetUserFeedsThunk } from '../../actions/actions';
import { RootState } from '../../reducers';
import MyWork from './MyWork';

export default function MyWorkContainer() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div>??</div>
    // <div>
    //   <h1>MyWorkContainer</h1>
    //   <button>더보기</button>
    //   {privateFeeds.length === 0 ? (
    //     <p>아무것도 없습니다</p>
    //   ) : privateFeeds.length <= 3 ? (
    //     privateFeeds.map((x, idx) => {
    //       return <MyWork privateFeed={x} key={idx} />;
    //     })
    //   ) : (
    //     <>
    //       <MyWork privateFeed={privateFeeds[0]} />
    //       <MyWork privateFeed={privateFeeds[1]} />
    //       <MyWork privateFeed={privateFeeds[2]} />
    //     </>
    //   )}
    // </div>
  );
}

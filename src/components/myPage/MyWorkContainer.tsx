import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import MyWork from './MyWork';

export default function MyWorkContainer() {
  const state = useSelector((state: RootState) => state.myPage);
  const { privateFeeds } = state;
  console.log('작동되는겨?', privateFeeds);

  return (
    <div>
      <h1>MyWorkContainer</h1>

      {privateFeeds.length <= 3 ? (
        privateFeeds.map((x, idx) => {
          return <MyWork privateFeed={x} key={idx} />;
        })
      ) : (
        <>
          <MyWork privateFeed={privateFeeds[0]} />
          <MyWork privateFeed={privateFeeds[1]} />
          <MyWork privateFeed={privateFeeds[2]} />
        </>
      )}
    </div>
  );
}

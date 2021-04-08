import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import MyWork from './MyWork';

export default function MyWorkContainer() {
  const state = useSelector((state: RootState) => state.getInfo);
  const { privateFeeds } = state;
  const privateFeedsKeys = Object.keys(privateFeeds);
  return (
    <div>
      <h1>MyWorkContainer</h1>
      <div>
        {privateFeedsKeys.length <= 3 ? (
          privateFeedsKeys.map((x) => {
            console.log(x);
            return <MyWork x={Number(x)} privateFeeds={privateFeeds} key={x} />;
          })
        ) : (
          <>
            <MyWork
              x={Number(privateFeedsKeys[0])}
              privateFeeds={privateFeeds}
            />
            <MyWork
              x={Number(privateFeedsKeys[1])}
              privateFeeds={privateFeeds}
            />
            <MyWork
              x={Number(privateFeedsKeys[2])}
              privateFeeds={privateFeeds}
            />
          </>
        )}
      </div>
    </div>
  );
}

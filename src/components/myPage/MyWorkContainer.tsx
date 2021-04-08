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
      {privateFeedsKeys.map((x) => {
        return <MyWork x={x} privateFeeds={privateFeeds} />;
      })}
    </div>
  );
}

import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyPhotoNickName from '../components/myPage/MyPhotoNickName';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { postBringFeedsThunk } from '../actions/getInfoActions';

export default function MyPage() {
  const { data } = useSelector((state: RootState) => state.reducer.userFeeds);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(postBringFeedsThunk({}));
  };
  console.log(data);
  return (
    <>
      <button onClick={onClickHandler}>클릭</button>
      <div>
        <MyWorkContainer />
      </div>
      <div>
        <MyAchievementContainer />
      </div>
      <div>
        <MyPhotoNickName />
      </div>
    </>
  );
}

import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyPhotoNickName from '../components/myPage/MyPhotoNickName';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';
import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTagsThunk,
  postBringUserInfoThunk,
  postGetFrivateFeedsThunk,
} from '../actions/actions';
import { useEffect } from 'react';
import MyIntroduction from '../components/myPage/MyIntroduction';

export default function MyPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const _accessToken = '';
  useEffect(() => {
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));

      dispatch(
        postGetFrivateFeedsThunk({
          topicId: 1,
          limit: 10,
          userId: 2,
          isMaxLike: null,
          feedId: null,
        })
      );
      dispatch(getAllTagsThunk());
    }
  }, []);
  console.log(state);
  return (
    <>
      <Homebutton />
      <Sidebar />
      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && <MyWorkContainer />}
      </div>
      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && <MyAchievementContainer />}
      </div>
      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && <MyPhotoNickName />}
      </div>
      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && <MyIntroduction />}
      </div>
    </>
  );
}

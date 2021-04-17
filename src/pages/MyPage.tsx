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
import { useEffect, useState } from 'react';
import MyIntroduction from '../components/myPage/MyIntroduction';
import Badges_Modal from '../components/myPage/modals/Badges_Modal';

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
  const [modal, setModal] = useState(false);
  const onClickHandler = () => {
    setModal(!modal);
  };
  console.log(state);
  return (
    <div id="myPage">
      <Homebutton />
      <Sidebar />
      <div>
        {modal && (
          <Badges_Modal
            modal={modal}
            setModal={setModal}
            modalHandler={onClickHandler}
          />
        )}
        {console.log(modal)}
      </div>

      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && <MyWorkContainer />}
      </div>
      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && (
          <MyAchievementContainer modalHandler={onClickHandler} />
        )}
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
    </div>
  );
}

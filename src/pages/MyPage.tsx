import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import Homebutton from '../components/Home/Homebutton';
import Sidebar from '../components/Home/Sidebar';
import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTagsThunk,
  postBringUserInfoThunk,
  postGetFrivateFeedsThunk,
} from '../actions/actions';
import { useEffect, useState } from 'react';
import Badges_Modal from '../components/myPage/modals/Badges_Modal';
import MyInfoContainer from '../components/myPage/MyInfoContainer';
import MyInfo_Modal from '../components/myPage/modals/MyInfo_Modal';

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

  //! 뱃지 모달 핸들러 구역
  const [badgeModal, setBadgeModal] = useState(false);
  const badgeModalHandler = () => {
    setBadgeModal(!badgeModal);
  };

  //! 자기소개 모달 핸들러 구역
  const [myInfoModal, setMyInfoModal] = useState(false);
  const myInfoModalHandler = () => {
    setMyInfoModal(!myInfoModal);
  };

  return (
    <div id="myPage">
      <Homebutton />
      <Sidebar />
      <div>
        {badgeModal && (
          <Badges_Modal
            modal={badgeModal}
            setModal={setBadgeModal}
            badgeModalHandler={badgeModalHandler}
          />
        )}
        {myInfoModal && (
          <MyInfo_Modal
            modal={myInfoModal}
            setModal={setMyInfoModal}
            myInfoModalHandler={myInfoModalHandler}
          />
        )}
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
          <MyAchievementContainer badgeModalHandler={badgeModalHandler} />
        )}
      </div>
      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && (
          <MyInfoContainer myInfoModalHandler={myInfoModalHandler} />
        )}
      </div>
    </div>
  );
}

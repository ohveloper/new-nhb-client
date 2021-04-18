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
  postGetUserAptInfoThunk,
} from '../actions/actions';
import { useEffect, useRef, useState } from 'react';
import Badges_Modal from '../components/myPage/modals/Badges_Modal';
import MyInfoContainer from '../components/myPage/MyInfoContainer';
import MyInfo_Modal from '../components/myPage/modals/MyInfo_Modal';
import { getTopicsT } from '../api/getTopics';

export default function MyPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const userId = state.userInfo.data?.data.userInfo.userId;
  useEffect(() => {
    const accessToken = state.accessToken;
    if (accessToken && userId) {
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
      getTopicsT()
        .then((x) => {
          const topicId = x.data.topics[0].id;
          dispatch(
            postGetFrivateFeedsThunk({
              topicId,
              limit: 10,
              userId,
              isMaxLike: null,
              feedId: null,
            })
          );
        })
        .catch((e) => console.log(e));

      dispatch(getAllTagsThunk());
      dispatch(postGetUserAptInfoThunk({ userId: userId }));
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
        {badgeModal && <Badges_Modal badgeModalHandler={badgeModalHandler} />}
        {myInfoModal && (
          <MyInfo_Modal myInfoModalHandler={myInfoModalHandler} />
        )}
      </div>

      <div>
        {state.privateFeeds.loading && 'now loading...'}
        {state.privateFeeds.error && 'sorry now Error'}
        {state.privateFeeds.data && <MyWorkContainer />}
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

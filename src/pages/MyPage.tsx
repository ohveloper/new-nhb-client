import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTagsThunk,
  postBringUserInfoThunk,
  postGetFrivateFeedsThunk,
  postGetUserAptInfoThunk,
} from '../actions/actions';
import { useEffect, useState } from 'react';
import MyInfoContainer from '../components/myPage/MyInfoContainer';
import MyInfo_Modal from '../components/myPage/modals/MyInfo_Modal';
import { getTopicsT } from '../api/getTopics';
import NavSidebarContainer from '../components/NavSidebar/NavSidebarContainer';
import SpaceBox from '../components/myPage/SpaceBox';
import '../styles/Mypage.scss';

export default function MyPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const userId = state.userInfo.data?.data.userInfo.userId;
  useEffect(() => {
    const accessToken = state.accessToken;
    if (accessToken && userId) {
      getTopicsT()
        .then(() => {
          dispatch(
            postGetFrivateFeedsThunk({
              topicId: null,
              limit: 10,
              userId,
              isMaxLike: true,
              feedId: null,
            })
          );
        })
        .catch((e) => console.log(e));
      dispatch(getAllTagsThunk());
      dispatch(postGetUserAptInfoThunk({ userId: userId }));
      dispatch(postBringUserInfoThunk({ userId }, accessToken));
    }
  }, []);

  //! 자기소개 모달 핸들러 구역
  const [myInfoModal, setMyInfoModal] = useState(false);
  const myInfoModalHandler = () => {
    setMyInfoModal(!myInfoModal);
  };

  return (
    <div id="MyPage">
      <NavSidebarContainer />
      <div>
        {myInfoModal && (
          <MyInfo_Modal myInfoModalHandler={myInfoModalHandler} />
        )}
      </div>
      <div>
        {state.userInfo.loading && 'now loading..'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && (
          <MyInfoContainer myInfoModalHandler={myInfoModalHandler} />
        )}
      </div>
      <SpaceBox />
      <div>
        {state.privateFeeds.loading && 'now loading..'}
        {state.privateFeeds.error && 'sorry now Error'}
        {state.privateFeeds.data && <MyWorkContainer />}
      </div>
      <SpaceBox />
      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && <MyAchievementContainer />}
      </div>
    </div>
  );
}
